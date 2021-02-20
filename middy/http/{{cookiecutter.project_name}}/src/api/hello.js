const middy = require('@middy/core')
const createError = require('http-errors')

/**
 * Middlewares
 */
const middlewareLogger = require('@middy/input-output-logger')
const middlewareErrorHandler = require('@middy/http-error-handler')
const middlewareHeaderNormalizer = require('@middy/http-header-normalizer')
const middlewareJsonBodyParser = require('@middy/http-json-body-parser')

/**
 * On event received
 * 
 * @param {object} event
 * @param {object} event.queryStringParameters
 */
const requestReceived = async ({ queryStringParameters }) => {
  // Validation test
  if (queryStringParameters.name === 'error') {
    throw new createError.BadRequest('ErrorNameParameter')
  }

	// Return greetings
  return {
    statusCode: 200,
    body: JSON.stringify({
      "message": `Hello ${queryStringParameters.name || process.env.DEFAULT_NAME}`
    })
  }
}

/**
 * Lambda Handler
 */
module.exports = {
	handler: middy(requestReceived)
		.use(middlewareLogger())
    .use(middlewareErrorHandler())
		.use(middlewareHeaderNormalizer())
    .use(middlewareJsonBodyParser())
}
