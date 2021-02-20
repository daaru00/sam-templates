/**
 * Lambda handler
 * 
 * @param {object} event 
 * @param {object[]} event.Records
 */
exports.handler = async (event) => {
	let { body } = event.Records.shift()

	if (typeof body === 'string') {
		try {
			body = JSON.parse(body)
		} catch (error) {
			console.error('Record cannot be parsed as JSON string:' + error.message)
			return
		}
	}

	return body
}
