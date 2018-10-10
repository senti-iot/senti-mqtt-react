import React, { Component } from 'react'
// import { options } from './options'
// var mqtt = require('mqtt')
import mqtt from 'mqtt'

var client = mqtt.connect('ws://hive.senti.cloud:8083')

// var clientId = options.clientId

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			device1: '',
			device2: '',
			device3: '',
			device4: '',
			device5: ''
		}
	}

	componentDidMount() {		
		client.subscribe('senti/sensor/#')
		client.subscribe('owntracks/user/mrbrobs')
		
		client.on('message', (topic, message) => {

			switch (topic.toString()) {
				case 'senti/sensor/sentiwi/8020/status':
					this.updateData('senti/sensor/sentiwi/8020/status: ' + message.toString(), '1')
					break
				case 'senti/sensor/darwin/cb-air/status':
					this.updateData('senti/sensor/darwin/cb-air/status: ' + message.toString(), '2')
					break
				case 'senti/sensor/darwin/cb-pro.local/status':
					this.updateData('senti/sensor/darwin/cb-pro.local/status: ' + message.toString(), '3')
					break
				case 'senti/sensor/linux/hive/status':
					this.updateData('senti/sensor/linux/hive/status: ' + message.toString(), '4')
					break
				case 'owntracks/user/mrbrobs':
					this.updateData(message.toString(), '5')
					// console.log(message.toString())
					break
				default:
					// console.log('Message discarded ...') senti/sensor/linux/hive/status
					break
			}
		})
	}

	updateData = (received, device) => {
		switch (device) {
			case '1': this.setState({ device1: received })
				break
			case '2': this.setState({ device2: received })
				break
			case '3': this.setState({ device3: received })
				break
			case '4': this.setState({ device4: received })
				break
			case '5': this.setState({ device5: received })
				break
			default:
				break
		}
	}

	render() {
		return (
			<div>
				<h1>Senti MQTT React Client</h1>
				<div>Device 1: {this.state.device1}</div>
				<div>Device 2: {this.state.device2}</div>
				<div>Device 3: {this.state.device3}</div>
				<div>Device 4: {this.state.device4}</div>
				<div>----</div>
				<div>Device 5: {this.state.device5}</div>
			</div>
		)
	}
}

export default App
