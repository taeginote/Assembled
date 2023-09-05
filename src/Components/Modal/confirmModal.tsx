import styled from 'styled-components'
import { FlexCenterCSS } from '../../Styles/common'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import { modalTypeFourProps } from '../../Types/modalType'
import { Question_Icon } from '../../Icons/Icons'
import { useSetRecoilState } from 'recoil'
import { modalViewConfirm } from '../../Atoms/modalViewConfirm.atom'

function ConfirmModal({ text, url, mutate, meetingId }: modalTypeFourProps) {
	const setRecoilCounter = useSetRecoilState(modalViewConfirm)
	const navigate = useNavigate()

	const onClickClose = () => {
		if (url === '/myPage' || url === '/') {
			mutate(meetingId)
			navigate(url)
		}
		if (url === '/myPage/comment') {
			const commentId = meetingId
			mutate(commentId)
		}
		if (url === '/admin') {
			mutate(meetingId)
			navigate(url)
		}
		if (url === undefined) {
			navigate('/')
		}

		document.body.style.overflow = 'auto'
		setRecoilCounter(false)
	}

	const onClickCancel = () => {
		document.body.style.overflow = 'auto'
		setRecoilCounter(false)
	}
	return (
		<S.Wrapper>
			<S.Box>
				<Question_Icon size={'65'} />
				<S.Text>{text}</S.Text>
				<span>
					<Button size={'normal'} onClick={onClickClose}>
						확인
					</Button>
					<Button
						size={'normal'}
						variant={'default-white'}
						onClick={onClickCancel}
					>
						취소
					</Button>
				</span>
			</S.Box>
		</S.Wrapper>
	)
}

export default ConfirmModal

const Wrapper = styled.div`
	position: fixed;
	top: -3rem;
	left: 0;
	height: 200vh;
	width: 100%;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.4);
	${FlexCenterCSS}
`
const Text = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.large};
	margin: 2rem 0;
`
const Box = styled.div`
	width: 45rem;
	padding: 2rem 0;
	text-align: center;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.COLOR.common.white};
	& > span {
		* {
			margin: 0 1rem;
		}
	}
	animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
	position: fixed;
	@keyframes fadeIn {
		0% {
			top: -20rem;
		}

		100% {
			top: 40%;
		}
	}
`
const S = { Wrapper, Text, Box }
