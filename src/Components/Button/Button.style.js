import styled, { css } from 'styled-components'

const variantCSS = {
	default: css`
		background-color: ${({ theme }) => theme.COLOR.main};
		&:hover {
			background-color: ${({ theme }) => theme.COLOR.sub};
			transition: all 0.3s ease-in-out;
		}

		&:disabled {
			background-color: ${({ theme }) => theme.COLOR.common.gray[200]};
		}
	`,
	'default-reverse': css`
		background-color: ${({ theme }) => theme.COLOR.button};

		&:hover {
			opacity: 0.7;
			transition: all 0.2s ease-in-out;
		}
	`,
}

const shapeCSS = {
	default: css`
		border-radius: 0.4rem;
	`,
	round: css`
		border-radius: 2rem;
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
	medium: css`
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	`,
	xs: css`
		font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	`,
	large: css`
		font-size: ${({ theme }) => theme.FONT_SIZE.large};
	`,
}

export const Button = styled.button`
	color: white;
	${({ variant }) => variantCSS[variant]}
	${({ shape }) => shapeCSS[shape]}
    ${({ size }) => sizeCSS[size]}
	${({ fontSize }) => fontSizeCSS[fontSize]}
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`
