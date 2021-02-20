const chromium = require('chrome-aws-lambda')
const { v4: uuid } = require('uuid')

/**
 * AWS clients
 */
const S3 = require('aws-sdk/clients/s3')
const s3 = new S3({
	apiVersion: '2006-03-01',
	logger: console
})
const EventBridge = require('aws-sdk/clients/eventbridge')
const eventBridge = new EventBridge({
	apiVersion: '2015-10-07',
	logger: console
})

/**
 * Lambda handler
 * 
 * @param {object} event
 * @param {string} event.html
 * @param {string} event.fileName
 * @param {number} event.expires
 */
const worker = async ({ html, fileName, expires }) => {
	let browser = null
	let pdf = null

	// Generate PDF
	try {
		browser = await chromium.puppeteer.launch({
			args: chromium.args,
			defaultViewport: chromium.defaultViewport,
			executablePath: await chromium.executablePath,
			headless: chromium.headless,
			ignoreHTTPSErrors: true,
		})

		let page = await browser.newPage()
		await page.setContent(html)

		pdf = await page.pdf({
			format: 'A4',
			printBackground: true,
			margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' }
		})
		
	} catch (err) {
		console.error(err)
		throw err
	} finally {
		if (browser !== null) {
			await browser.close()
		}
	}

	// Format file name
	fileName = fileName || 'document'
	if (fileName.endsWith('.pdf') === false) {
		fileName = fileName + '.pdf'
	}

	// Upload PDF file
	const objectKey = `${uuid()}/${fileName}`
	await s3.upload({
		Bucket: process.env.BUCKET_NAME,
		Key: objectKey,
		Body: pdf,
		ContentType: 'application/pdf',
	}).promise()

	// Generate a download link
	const downloadLink = s3.getSignedUrl('getObject', {
		Bucket: process.env.BUCKET_NAME,
		Key: objectKey,
		Expires: expires || process.env.DOWNLOAD_LINK_EXPIRES || 900 // 15 minutes
	})

	// Send generated event
	await eventBridge.putEvents({
		Entries: [{
			EventBusName: process.env.EVENT_BUS_NAME,
			Source: process.env.EVENT_SOURCE_NAME,
			DetailType: 'pdf/generated',
			Detail: JSON.stringify({
				path: `s3://${process.env.BUCKET_NAME}/${objectKey}`,
				name: fileName,
				url: downloadLink
			})
		}]
	}).promise()
}

/**
 * Lambda handler
 * 
 * @param {object} event 
 * @param {object[]} event.Records
 */
exports.handler = async (event) => {
	const promises = []

	event.Records.forEach(({ body }) => {
		if (typeof body === 'string') {
			try {
				body = JSON.parse(body)
			} catch (error) {
				console.error('Record cannot be parsed as JSON string:' + error.message)
				return
			}
		}
		promises.push(worker(body))
	})

	await Promise.all(promises)
}
