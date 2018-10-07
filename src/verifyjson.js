/* 
let client

client.on('message', (topic, message) => {

	const verifyJSON = (json) => { // Catch invalid JSON
		let parsed
		try {
			parsed = JSON.parse(json)
		} catch (err) {
			console.error('error', err)
		}
		return parsed
	}
	var received = verifyJSON(message)

	console.log('Topic: ' + topic + '\nMessage: ', JSON.stringify(received))
})

 */

 const isJsonString = (str) => {
	try {
		return (JSON.parse(str) && !!str)
	} catch (err) {
		return false
	}
	// return true
}

module.exports = {
	isJsonString
}
