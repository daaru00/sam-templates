/**
 * Custom error
 */
class MyError extends Error {
	constructor(message) {
		super(message)
		this.name = 'MyError'
	}
}

/**
 * Lambda handler
 * 
 * @param {object} event 
 */
exports.handler = async function({ foo, bar }) {
	console.log('foo', foo)
	console.log('bar', bar)

	if (bar === 6) {
		throw new MyError('An example of error handling')
	}

	// this will be set in $.Result
	return {
		IsHelloWorldExample: true
	}
}
