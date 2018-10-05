import React, { Component } from 'react'
import './App.css'
// import { options } from './options'
// var mqtt = require('mqtt')
import mqtt from 'mqtt'

var client = mqtt.connect('ws://hive.senti.cloud:8083')

// var clientId = options.clientId

/* client.on('connect', function () {
	client.subscribe('sensor/test', function (err) {
		if (!err) {			
			client.publish('sensor/status/' + clientId, 'online ', { retain: false })
			client.publish('sensor/test', clientId + ': connected')
			client.subscribe('sensor/update')
			console.log('Connected')
		}
	})
}) */


class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			message: 'State constructed'
		}
	}

	componentDidMount() {
		client.subscribe('sensor/test')
		client.on('message', (topic, message) => {
			if (topic.toString() === 'sensor/test') {
				// console.log(message.toString())
				this.updateData(message.toString())
			}
		})
	}

	updateData = (received) => {
		this.setState({ message: received })
	}

	render() {
		return (
			<div>
				Hello {this.state.message}
			</div>
		)
	}
}

export default App
