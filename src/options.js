
const options = {
	host: 'ws://hive.senti.cloud',
	port: '8083',
	username: '',
	password: '',
	keepalive: 60, // 60
	clientId: 'senti-mqtt-react',
	clean: true, // false for persistende sessions
	will: {
		topic: 'sensor/status/senti-mqtt-react',
		payload: 'offline (dead)',
		qos: 1,
		retain: true
	},
	slackChannel: 'https://hooks.slack.com/services/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',
	logLocale: 'da'
}

module.exports = {
	options: options
}

// d40e3cc58606dcfc02fd0ec7d02dfc9b17f90097