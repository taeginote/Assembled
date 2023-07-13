import styled from 'styled-components'
import { childrenType } from '../../Types/type'

function HookFormError(props: childrenType) {
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

	text-align: start;
	width: 100%;
	margin-bottom: 0.5rem;
`

const S = { Message }
