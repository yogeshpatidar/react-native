import React, { Component } from "react"
import { Button } from "react-native"
import { observer } from "mobx-react/native"
import { AgoraSdk, AgoraSdkEvent } from "lib"
import { View } from "components"
import { observable } from "mobx"

@observer
export class App extends Component<any> {
	@observable
	state = {
		isMuted: true,
		isJoined: false
	}
	constructor(props: any) {
		super(props)
		AgoraSdk.createEngine("27f83f371b5b437b9ecde8b0e97f5af3")

		AgoraSdk.setChannelProfile(AgoraSdk.AgoraChannelProfileLiveBroadcasting)

		AgoraSdk.enableAudio()
		AgoraSdkEvent.addListener("DidOccurError", console.log)
		AgoraSdkEvent.addListener("RemoteDidJoinedChannel", (...args) =>
			console.log({ RemoteDidJoinedChannel: args })
		)
	}

	toggleAudio = () => {
		this.state.isMuted = !this.state.isMuted
		AgoraSdk.muteLocalAudioStream(this.state.isMuted)
	}

	join = () => {
		this.state.isJoined = true
		AgoraSdk.joinChannel(
			null,
			"rnchannel01",
			"React Native for Agora RTC SDK",
			Math.random() * 1000
		)
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
				<Button
					title={
						this.state.isJoined ? "Join Channel" : "Leave Channel"
					}
					onPress={this.join}
				/>
				<Button
					title={
						this.state.isMuted
							? "Switch to Host"
							: `Switch to Audience`
					}
					onPress={this.toggleAudio}
				/>
			</View>
		)
	}
}
