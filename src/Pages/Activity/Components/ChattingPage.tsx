import { styled } from 'styled-components'

function ChattingPage() {
	return (
		<S.Wrapper>
			<S.Chatting>
				<S.Title>채팅</S.Title>
			</S.Chatting>
		</S.Wrapper>
	)
}
export default ChattingPage

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
`
const Chatting = styled.div`
	width: 100%;
`
const Title = styled.div`
	width: 100%;
	border-bottom: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	padding: 1rem 0 1rem 2rem;
`
const S = { Wrapper, Chatting, Title }
