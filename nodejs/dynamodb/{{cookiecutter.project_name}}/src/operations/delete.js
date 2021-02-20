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

  // Delete record from table
  await dynamoDB.delete({
		TableName: process.env.TABLE_NAME,
		Key: {
			id: event.id,
			range_id: event.range_id
		}
	}).promise()
}
