import React, { Component } from 'react'
import './App.css'
// import { options } from './options'
// var mqtt = require('mqtt')
import mqtt from 'mqtt'

var client = mqtt.connect('ws://hive.senti.cloud:8083')


// var clientId = options.clientId

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			message: 'State constructed'
		}
	}

	componentDidMount() {
		client.subscribe('sensor/test')
		client.subscribe('sensor/status/#')
		// client.subscribe('owntracks/user/mrbrobs')
		
		client.on('message', (topic, message) => {

			switch (topic.toString()) {
				case 'sensor/test':
					this.updateData(message.toString())
					break
				// case 'sensor/status/#':
				// 	this.updateData(message.toString())
				// 	break
				case 'sensor/status/8020':
					this.updateData('8020: ' + message.toString())
					break
				case 'sensor/status/cb-air':
					this.updateData('cb-air: ' + message.toString())
					break
				case 'sensor/status/cb-pro.local':
					this.updateData('cb-pro.local: ' + message.toString())
					break
				// case 'owntracks/user/mrbrobs':
				// 	this.updateData('mylocation: ' + message.toString())
				// 	console.log(message.toString())
				// 	break
				default:
					// console.log('Message discarded ...')
					break
			}

			// if (topic.toString() === 'sensor/test') {
			// 	console.log(message.toString())
			// 	this.updateData(message.toString())
			// }
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
