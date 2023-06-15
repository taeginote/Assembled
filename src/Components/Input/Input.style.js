import styled, { css } from 'styled-components'

export const Input = styled.input`
	border: none;
	width: 100%;
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	background: none;
	padding: 1.8rem;
	height: 4.5rem;
	::placeholder {
		color: ${({ theme }) => theme.COLOR.common.gray[400]};
	}

	&:disabled {
		color: ${({ theme }) => theme.COLOR.common.gray[400]};
		opacity: 1;
	}
`
