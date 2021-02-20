const { v4: uuid } = require('uuid')

/**
 * AWS Clients
 */
const DynamoDB = require('aws-sdk/clients/dynamodb')
const dynamoDB = new DynamoDB.DocumentClient({
	apiVersion: '2012-08-10',
	logger: console
})

/**
 * Lambda handler
 * 
 * @param {object} event 
 */
exports.handler = async function(event) {

  // Insert record into table
  await dynamoDB.put({
		TableName: process.env.TABLE_NAME,
		Item: {
			id: uuid(),
			range_id: event.range_id,
			secondary_attribute: event.secondary_attribute,
		}
	}).promise()
}
