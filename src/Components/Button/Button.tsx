import * as S from './Button.style'

interface ButtonProps {
	variant?: 'default-white' | 'default-reverse' | 'default'
	shape?: 'default' | 'round'
	size?: 'normal' | 'big' | 'default'
	fontSize?: 'default'
	type?: 'submit' | 'button'
	disabled?: boolean
	children?: React.ReactNode
	onClick?: any //보류
}

function Button(props: ButtonProps) {
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
			title="Button"
		>
			{children}
		</S.Button>
	)
}
export default Button
