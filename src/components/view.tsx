import styled from "styled-components/native"
import _Row, { IRow, View as _View } from "react-native-row"
import React from "react"
import { flattenStyles, randomColor } from "lib"

export const Row_ = styled(_Row)`
	${flattenStyles};
	${props => (props.debug ? `backgroundColor: ${randomColor()}` : "")};
`
const View_ = styled(_View)`
	${flattenStyles};
	${props => (props.debug ? `backgroundColor: ${randomColor()}` : "")};
`
export const View = (props?: IRow) => <View_ {...props as any} />
export const Row = (props?: IRow) => <Row_ {...props as any} />
