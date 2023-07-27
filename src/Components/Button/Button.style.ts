import styled, { css } from 'styled-components'

type Props = {
	variant: 'default-white' | 'default-reverse' | 'default'
	shape: 'default'
	size: 'normal' | 'big' | 'default'
	fontSize: 'default'
	disabled: boolean
}

const variantCSS = {
	default: css`
		background-color: ${({ theme }) => theme.COLOR.main};
		&:hover {
			background-color: ${({ theme }) => theme.COLOR.hover};
			transition: all 0.3s ease-in-out;
		}
		&:disabled {
			background-color: ${({ theme }) => theme.COLOR.common.gray[400]};
		}
	`,
	'default-reverse': css`
		background-color: ${({ theme }) => theme.COLOR.button};

		&:hover {
			opacity: 0.7;
			transition: all 0.2s ease-in-out;
		}
	`,
	'default-white': css`
		background-color: ${({ theme }) => theme.COLOR.common.white};
		border: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};
		color: ${({ theme }) => theme.COLOR.common.black};
		&:hover {
			background-color: ${({ theme }) => theme.COLOR.common.gray[100]};
			transition: all 0.2s ease-in-out;
		}
	`,
}

const shapeCSS = {
	default: css`
		border-radius: 0.4rem;
	`,
}

const sizeCSS = {
	default: css`
		width: 100%;
		height: 4.8rem;
	`,
	normal: css`
		width: 6rem;
		height: 3.8rem;
	`,
	big: css`
		width: 10rem;
		height: 3.8rem;
	`,
}

const fontSizeCSS = {
	default: css`
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	`,
}

export const Button = styled.button<Props>`
	color: white;
	${({ variant }) => variantCSS[variant]}
	${({ shape }) => shapeCSS[shape]}
    ${({ size }) => sizeCSS[size]}
	${({ fontSize }) => fontSizeCSS[fontSize]}
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`
