const middy = require('@middy/core')

/**
 * Middlewares
 */
const middlewareLogger = require('@middy/input-output-logger')

/**
 * On event received
 * 
 * @param {object} event
 */
const eventReceived = async (event) => {
	return event
}

/**
 * Lambda Handler
 */
module.exports = {
	handler: middy(eventReceived)
		.use(middlewareLogger())
}
