import * as S from './Button.style'

function Button(props) {
	const {
		variant = 'default',
		shape = 'default',
		size = 'default',
		fontSize = 'default',
		children,
		...rest
	} = props

	return (
		<S.Button
			variant={variant}
			shape={shape}
			size={size}
			fontSize={fontSize}
			// disabled={!!rest.disabled}
			{...rest}
		>
			{children}
		</S.Button>
	)
}
export default Button
