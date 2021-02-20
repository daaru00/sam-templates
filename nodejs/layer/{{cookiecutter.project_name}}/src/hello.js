const { v4: uuid } = require('uuid')

/**
 * Lambda handler
 */
exports.handler = async function() {
  return uuid()
}
