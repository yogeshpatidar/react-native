import React, { Component } from "react"
import { AsyncStorage } from "react-native"
import { create } from "mobx-persist"
import { observer } from "mobx-react/native"
import { View } from "components"
import { AppStore } from "./store"
import { action } from "mobx"

@observer
export class App extends Component<any> {
	constructor(props: any) {
		super(props)
		this.init()
	}

	init = async () => {
		const hydrate = create({
			storage: AsyncStorage
		})

		await hydrate("auth", AppStore.auth)

		action("statusReported", () => {
			AppStore.auth.statusReported = true
		})()
	}

	render() {
		return (
			<View
				style={{
					justifyContent: "center",
					alignItems: "center",
					flex: 1
				}}
			/>
		)
	}
}
