/**
 * Queue Worker
 * 
 * @param {object} record
 */
const worker = async function(record) {
  return record
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
