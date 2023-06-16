import styled from 'styled-components'

function HookFormError(props) {
	const { children } = props
	return (
		<S.Message>
			<div>{children}</div>
		</S.Message>
	)
}
export default HookFormError

const Message = styled.div`
	color: ${({ theme }) => theme.COLOR.error};
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	text-align: start;
	width: 100%;
	margin-bottom: 2rem;
`

const S = { Message }
