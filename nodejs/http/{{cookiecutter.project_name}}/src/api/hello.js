/**
 * Lambda handler
 * 
 * @param {object} event
 * @param {object} event.queryStringParameters
 */
exports.handler = async function({ queryStringParameters }) {
  // Return greetings
  return {
    statusCode: 200,
    body: JSON.stringify({
      "message": `Hello ${queryStringParameters.name || process.env.DEFAULT_NAME}`
    })
  }
}
