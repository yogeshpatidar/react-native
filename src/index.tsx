import React, { Component } from "react"
import { TouchableHighlight, Text, ActivityIndicator } from "react-native"
import { observer } from "mobx-react/native"
import { AgoraSdk, AgoraSdkEvent } from "lib"
import { View } from "components"
import { observable } from "mobx"

@observer
export class App extends Component<any> {
	@observable
	data = {
		isMuted: true,
		isJoined: false,
		loading: false,
		audience: 0,
		error: ""
	}

	constructor(props: any) {
		super(props)
		AgoraSdk.createEngine("27f83f371b5b437b9ecde8b0e97f5af3")

		AgoraSdk.setChannelProfile(AgoraSdk.AgoraChannelProfileLiveBroadcasting)

		AgoraSdk.enableAudio()
		AgoraSdkEvent.addListener("DidOccurError", (...args) => {
			this.data.error = args as any
		})
		AgoraSdkEvent.addListener("LocalDidJoinedChannel", (...args) => {
			this.data.loading = false
			this.data.isJoined = true
			this.data.audience = this.data.audience + 1
			console.log({ LocalDidJoinedChannel: args })
		})
		AgoraSdkEvent.addListener("RemoteDidJoinedChannel", (...args) => {
			this.data.audience = this.data.audience + 1
			console.log({ RemoteDidJoinedChannel: args })
		})
	}

	toggleAudio = () => {
		this.data.isMuted = !this.data.isMuted
		AgoraSdk.muteLocalAudioStream(this.data.isMuted)
	}

	join = () => {
		if (!this.data.isJoined) {
			console.log("joined")
			this.data.loading = true
			AgoraSdk.joinChannel(
				null,
				"rnchannel01",
				"React Native for Agora RTC SDK",
				Math.random() * 1000
			)
		} else {
			console.log("left")
			this.data.isJoined = false

			AgoraSdk.leaveChannel()
		}
	}

	render() {
		return (
			<View
				style={{
					justifyContent: "center",
					alignItems: "center",
					flex: 1
				}}
			>
				<TouchableHighlight
					style={{
						backgroundColor: "papayawhip",
						padding: 50,
						elevation: 1
					}}
					onPress={this.join}
				>
					{this.data.loading ? (
						<ActivityIndicator />
					) : this.data.isJoined ? (
						<Text>Leave Channel</Text>
					) : (
						<Text>Join Channel</Text>
					)}
				</TouchableHighlight>
				<View style={{ height: 60 }} />
				<TouchableHighlight
					style={{
						backgroundColor: "papayawhip",
						padding: 50,
						elevation: 1
					}}
					onPress={this.toggleAudio}
				>
					<Text>
						{this.data.isMuted
							? "Switch to Host"
							: `Switch to Audience`}
					</Text>
				</TouchableHighlight>

				<Text>Number of people in room {this.data.audience}</Text>
				{this.data.error ? (
					<Text>aha! error: {JSON.stringify(this.data.error)}</Text>
				) : null}
			</View>
		)
	}
}
