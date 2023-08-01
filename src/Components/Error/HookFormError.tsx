import styled from 'styled-components'
import { childrenType } from '../../Types/type'

function HookFormError(props: childrenType & { status?: boolean }) {
	const { children, status = 'error' } = props

	return (
		<S.Message status={status === 'error'}>
			<div>{children}</div>
		</S.Message>
	)
}
export default HookFormError

const Message = styled.div<{ status: boolean }>`
	color: ${({ theme, status }) =>
		status ? theme.COLOR.error : theme.COLOR.success};

	text-align: start;
	width: 100%;
	margin-bottom: 0.5rem;
`

const S = { Message }
