/**
 * Lambda handler
 * 
 * @param {object} event
 * @param {object} event.queryStringParameters
 */
exports.handler = async function({ queryStringParameters }) {
  const name = queryStringParameters && queryStringParameters.name ? queryStringParameters.name : process.env.DEFAULT_NAME

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name}`
    })
  }
}
