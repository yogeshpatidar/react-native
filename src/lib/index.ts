import { TextStyle, ViewStyle, NativeModules, NativeEventEmitter } from "react-native"

export const AgoraSdk = Object.create(NativeModules.AgoraRtcEngineModule)
export const AgoraSdkEvent = new NativeEventEmitter(NativeModules.AgoraRtcEngineModule)

export const randomColor = () => {
	const letters = "0123456789ABCDEF"
	let color = "#"
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}

	return color
}

export const formatString = (string: string) =>
	string.replace(/&quot;/g, '"').replace(/&#039;/g, "'")

const styleProps = {
	alignContent: true,
	alignItems: true,
	alignSelf: true,
	aspectRatio: true,
	borderBottomWidth: true,
	borderLeftWidth: true,
	borderRightWidth: true,
	borderTopWidth: true,
	borderWidth: true,
	bottom: true,
	flexBasis: true,
	flexDirection: true,
	flexGrow: true,
	flexShrink: true,
	flexWrap: true,
	height: true,
	justifyContent: true,
	left: true,
	marginBottom: true,
	marginHorizontal: true,
	marginLeft: true,
	marginRight: true,
	marginTop: true,
	marginVertical: true,
	maxHeight: true,
	maxWidth: true,
	minHeight: true,
	minWidth: true,
	overflow: true,
	paddingBottom: true,
	paddingHorizontal: true,
	paddingLeft: true,
	paddingRight: true,
	paddingTop: true,
	paddingVertical: true,
	position: true,
	right: true,
	top: true,
	width: true,
	zIndex: true,
	direction: true,
	backfaceVisibility: true,
	backgroundColor: true,
	borderBottomColor: true,
	borderBottomLeftRadius: true,
	borderBottomRightRadius: true,
	borderColor: true,
	borderLeftColor: true,
	borderRadius: true,
	borderRightColor: true,
	borderStyle: true,
	borderTopColor: true,
	borderTopLeftRadius: true,
	borderTopRightRadius: true,
	display: true,
	opacity: true,
	shadowColor: true,
	shadowOffset: true,
	shadowOpacity: true,
	shadowRadius: true,
	elevation: true,
	color: true,
	fontFamily: true,
	fontSize: true,
	fontStyle: true,
	fontWeight: true,
	letterSpacing: true,
	lineHeight: true,
	textAlign: true,
	textDecorationLine: true,
	textDecorationStyle: true,
	textDecorationColor: true,
	textShadowColor: true,
	textShadowOffset: true,
	textShadowRadius: true
}

export const flattenStyles = (styles: ViewStyle | TextStyle) => {
	const keys = Object.keys(styles).filter(p => styleProps[p])
	return keys.reduce(
		(acc, key) => `
		${acc}
		${key}: ${styles[key]};
	`,
		""
	)
}
