const middy = require('@middy/core')

/**
 * Middlewares
 */
const middlewareLogger = require('@middy/input-output-logger')
const middlewareValidator = require('@middy/validator')

/**
 * Input schema
 */
const schema = {
  required: ['foo'],
  properties: {
    foo: {
      type: 'string'
    }
  }
}

/**
 * On event received
 * 
 * @param {object} event
 * @param {string} event.foo
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
		.use(middlewareValidator({
			inputSchema: schema
		}))
}
