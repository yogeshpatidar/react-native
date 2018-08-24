import React, { Component } from "react"
import { flattenStyles } from "lib"
import {
	TouchableOpacityProperties,
	TouchableOpacity as Touchable
} from "react-native"
import styled from "styled-components/native"

const Touchable_ = styled(Touchable)`
	${flattenStyles};
`

export class TouchableOpacity extends Component<TouchableOpacityProperties> {
	render() {
		return <Touchable_ {...this.props} />
	}
}
