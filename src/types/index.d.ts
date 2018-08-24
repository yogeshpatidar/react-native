declare module "react-native-row" {
	import { ReactElement } from "react"
	import {
		PerpectiveTransform,
		RotateTransform,
		RotateXTransform,
		RotateYTransform,
		RotateZTransform,
		ScaleTransform,
		ScaleXTransform,
		ScaleYTransform,
		SkewXTransform,
		SkewYTransform,
		StyleProp,
		TranslateXTransform,
		TranslateYTransform,
		ViewProperties,
		ViewStyle
	} from "react-native"

	export interface IRow extends ViewProperties {
		style?: StyleProp<ViewStyle>
		debugStyle?: (style: string) => void
		debug?: boolean
		children?: ReactElement
		flex?: boolean | number
		dial?: number
		spaceBetween?: boolean
		spaceAround?: boolean
		stretch?: boolean
		reverse?: boolean
		margin?:
			| number
			| [number]
			| [number, number]
			| [number, number, number]
			| [number, number, number, number]
		padding?:
			| number
			| [number]
			| [number, number]
			| [number, number, number]
			| [number, number, number, number]
		backfaceVisibility?: "visible" | "hidden"
		backgroundColor?: string
		borderBottomColor?: string
		borderBottomLeftRadius?: number
		borderBottomRightRadius?: number
		borderBottomWidth?: number
		borderColor?: string
		borderLeftColor?: string
		borderRadius?: number
		borderRightColor?: string
		borderRightWidth?: number
		borderStyle?: "solid" | "dotted" | "dashed"
		borderTopColor?: string
		borderTopLeftRadius?: number
		borderTopRightRadius?: number
		borderTopWidth?: number
		display?: "none" | "flex"
		opacity?: number
		overflow?: "visible" | "hidden"
		shadowColor?: string
		shadowOffset?: { width: number; height: number }
		shadowOpacity?: number
		shadowRadius?: number
		elevation?: number
		alignContent?:
			| "flex-start"
			| "flex-end"
			| "center"
			| "stretch"
			| "space-between"
			| "space-around"
		alignSelf?:
			| "flex-start"
			| "flex-end"
			| "center"
			| "stretch"
			| "space-between"
			| "space-around"
		aspectRatio?: number
		borderBottomWidth?: number
		borderLeftWidth?: number
		borderRightWidth?: number
		borderTopWidth?: number
		borderWidth?: number
		bottom?: number | string
		flexBasis?: number | string
		flexDirection?: "row" | "column" | "row-reverse" | "column-reverse"
		flexGrow?: number
		flexShrink?: number
		flexWrap?: "wrap" | "nowrap"
		height?: number | string
		left?: number | string
		marginBottom?: number | string
		marginHorizontal?: number | string
		marginLeft?: number | string
		marginRight?: number | string
		marginTop?: number | string
		marginVertical?: number | string
		maxHeight?: number | string
		maxWidth?: number | string
		minHeight?: number | string
		minWidth?: number | string
		overflow?: "visible" | "hidden" | "scroll"
		padding?: number | string
		paddingBottom?: number | string
		paddingHorizontal?: number | string
		paddingLeft?: number | string
		paddingRight?: number | string
		paddingTop?: number | string
		paddingVertical?: number | string
		position?: "absolute" | "relative"
		right?: number | string
		top?: number | string
		width?: number | string
		zIndex?: number

		/**
		 * @platform ios
		 */
		direction?: "inherit" | "ltr" | "rtl"
		color?: string
		fontFamily?: string
		fontSize?: number
		fontStyle?: "normal" | "italic"
		/**
		 * Specifies font weight. The values 'normal' and 'bold' are supported
		 * for most fonts. Not all fonts have a variant for each of the numeric
		 * values, in that case the closest one is chosen.
		 */
		fontWeight?:
			| "normal"
			| "bold"
			| "100"
			| "200"
			| "300"
			| "400"
			| "500"
			| "600"
			| "700"
			| "800"
			| "900"
		letterSpacing?: number
		lineHeight?: number
		/**
		 * Specifies text alignment.
		 * The value 'justify' is only supported on iOS.
		 */
		textAlignVertical?: "auto" | "top" | "bottom" | "center"
		letterSpacing?: number
		textDecorationColor?: string
		textDecorationStyle?: "solid" | "double" | "dotted" | "dashed"
		writingDirection?: "auto" | "ltr" | "rtl"
		includeFontPadding?: boolean
		textAlign?: "auto" | "left" | "right" | "center"
		textDecorationLine?:
			| "none"
			| "underline"
			| "line-through"
			| "underline line-through"
		textDecorationStyle?: "solid" | "double" | "dotted" | "dashed"
		textDecorationColor?: string
		textShadowColor?: string
		textShadowOffset?: { width: number; height: number }
		textShadowRadius?: number
		transform?: Array<
			| PerpectiveTransform
			| RotateTransform
			| RotateXTransform
			| RotateYTransform
			| RotateZTransform
			| ScaleTransform
			| ScaleXTransform
			| ScaleYTransform
			| TranslateXTransform
			| TranslateYTransform
			| SkewXTransform
			| SkewYTransform
		>
		transformMatrix?: number[]
		rotation?: number
		scaleX?: number
		scaleY?: number
		translateX?: number
		translateY?: number
	}
	class Row extends React.Component<IRow, {}> {}

	export class View extends React.Component<IRow, {}> {}
	export default Row
}

declare module "react-native-cardview" {
	const Card: any
	export default Card
}

declare module "unescape-html"
