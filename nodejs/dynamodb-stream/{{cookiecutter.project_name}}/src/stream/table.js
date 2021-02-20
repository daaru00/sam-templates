/**
 * Stream Worker
 * 
 * @param {object} record
 */
const worker = async function(eventName, {OldImage: oldImage, NewImage: newImage}) {

  // Check event type
  switch (eventName) {
    case 'INSERT':
      console.log('new record created', newImage);
      break;
    case 'MODIFY':
      console.log('record modified', oldImage, newImage);
      break;
    case 'REMOVE':
      console.log('record removed', oldImage);
      break;
  }
}


/**
 * Lambda handler
 * 
 * @param {object} event 
 * @param {object[]} event.Records
 */
exports.handler = async (event) => {
	const promises = []

	event.Records.forEach(({ eventName, dynamodb }) => {
		promises.push(worker(eventName, dynamodb))
	})

	await Promise.all(promises)
}
