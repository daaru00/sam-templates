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

  // Query records
  const { Items: items } = await dynamoDB.query({
		TableName: process.env.TABLE_NAME,
		KeyConditionExpression: 'id = :id AND secondary_attribute = :secondary_attribute',
		ExpressionAttributeValues: {
			':id': event.id,
			':secondary_attribute': event.secondary_attribute
		},
		IndexName: 'BY_ID'
	}).promise()
  
  // Return items
	return items
}
