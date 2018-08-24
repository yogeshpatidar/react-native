import React, { Component } from "react"
import { flattenStyles } from "lib"
import { Text as _Text, TextProperties, TextStyle } from "react-native"
import styled from "styled-components/native"

export class Fonts {
	static bold = "CamphorPro-Heavy"
}

const mapFont = (props: any) => {
	let keys = Object.keys(props)
	keys = keys.map(e => Fonts[e])
	return keys[0] || "CamphorPro-Light"
}

const Text_ = styled(_Text)`
	background-color: transparent;
	color: #000;
	${flattenStyles};
	font-family: ${mapFont};
`

interface IText extends TextProperties, TextStyle {
	bold?: boolean
	black?: boolean
	hairline?: boolean
	harlineItalic?: boolean
	heavy?: boolean
	heavyItalic?: boolean
	italic?: boolean
	light?: boolean
	lightItalic?: boolean
	medium?: boolean
	mediumItalic?: boolean
	regular?: boolean
	semiBold?: boolean
	semiBolditalic?: boolean
	thinItalic?: boolean
}

export class Text extends Component<IText> {
	render() {
		return <Text_ {...this.props} />
	}
}
