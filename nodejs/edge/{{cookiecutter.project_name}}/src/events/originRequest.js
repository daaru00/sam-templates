/**
 * Lambda handler
 * 
 * @param {object} event 
 */
exports.handler = async function(event) {
  return {
    statusCode: 200,
    body: "Lambda@Edge is awesome!",
  }
}
