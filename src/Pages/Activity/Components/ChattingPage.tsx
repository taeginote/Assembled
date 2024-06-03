import { styled } from 'styled-components'
import ProfileImgReturn from '../../../Utils/ProfileImgReturn'
import { useState } from 'react'
import { SendIcon } from '../../../Icons/Icons'
import { TextareaEventTargetType } from '../../../Types/type'

function ChattingPage() {
	const testArr: 0[] = Array(20).fill(0)

	const [inputChatting, setInputChatting] = useState<null | string>(null)

	const onSend = () => {
		if (inputChatting === null || inputChatting!.trim().length === 0) return
		setInputChatting(null)
	}
	const onEnterSend = (e: TextareaEventTargetType) => {
		if (e.nativeEvent.isComposing) return
		if (e.key === 'Enter') {
			e.preventDefault()
			if (inputChatting === null || inputChatting!.trim().length === 0) return
		}
	}

	return (
		<S.Chatting>
			<S.ChattingZone>
				<S.Intro>
					<div>채팅을 시작합니다</div>
				</S.Intro>
				{testArr.map((el, idx: number) => (
					<S.ChatList key={idx}>
						<S.UserImg src={ProfileImgReturn()} />
						<S.ChattingContent>안녕하세요~~</S.ChattingContent>
						<S.Time>16:00</S.Time>
					</S.ChatList>
				))}
			</S.ChattingZone>
			<S.InputWrapper>
				<S.InputChatting
					placeholder={'메세지 쓰기'}
					$status={inputChatting !== null}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
						setInputChatting(e.target.value)
					}
					onKeyDown={onEnterSend}
				/>
				<S.IconWrapper onClick={onSend}>
					<SendIcon />
				</S.IconWrapper>
			</S.InputWrapper>
		</S.Chatting>
	)
}
export default ChattingPage

const Wrapper = styled.div`
	width: 100%;
	height: 50%;

	display: flex;
	justify-content: center;
`
const Chatting = styled.div`
	width: 100%;
	height: 100%;

	width: 100%;
`

const ChattingZone = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	width: 100%;
	height: 78vh;
	overflow: auto;
`
const Intro = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	text-align: center;
	& > div {
		width: 15rem;
		padding: 0.2rem 0;
		border-radius: 2rem;
		margin: 2rem 0;
		background-color: ${({ theme }) => theme.COLOR.main};
	}
`
const ChatList = styled.div`
	margin-left: 3rem;
	margin-bottom: 2rem;
	display: flex;
	align-items: center;
`
const UserImg = styled.img`
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
`

const ChattingContent = styled.div`
	background-color: ${({ theme }) => theme.COLOR.orange};
	margin-left: 1rem;
	padding: 0.2rem 1rem;
	border-radius: 1rem;
`
const InputChatting = styled.textarea<{ $status: boolean }>`
	border: none;
	border: 2px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	width: 95%;
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	color: ${({ theme, $status }) =>
		$status ? 'black' : theme.COLOR.common.gray[200]};
	height: 12.9vh;
	padding: 2rem;
	margin: 0 3rem;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		margin: 0;
		margin-left: 2rem;
	}
	white-space: pre-wrap;
	word-wrap: break-word;
	border-radius: 2rem;
	resize: none;
	&:focus {
		outline: 2px solid ${({ theme }) => theme.COLOR.sub};
	}
	overflow: auto;
`
const InputWrapper = styled.div`
	width: 99%;

	height: 12.9vh;
`
const IconWrapper = styled.div`
	position: absolute;
	bottom: 4rem;
	right: 9rem;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		right: 4rem;
		bottom: 5%;
	}
`
const Time = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.ss};
	margin-top: 0.8rem;
	margin-left: 0.3rem;
	color: ${({ theme }) => theme.COLOR.common.gray[300]};
`
const S = {
	Wrapper,
	Chatting,
	ChattingZone,
	Intro,
	ChatList,
	UserImg,
	ChattingContent,
	InputChatting,
	InputWrapper,
	IconWrapper,
	Time,
}
