import styled from 'styled-components'
import { FlexCenterCSS } from '../../Styles/common'
import { useSetRecoilState } from 'recoil'
import Button from '../Button/Button'
import { modalViewNotification } from '../../Atoms/modalView.atom'
import { useNavigate } from 'react-router-dom'
import { modalTypeTwoProps } from '../../Types/modalType'
import { Warning_Icon } from '../../Icons/Icons'

type NotificationProps = Omit<modalTypeTwoProps, 'setState'>

function NotificationModal({ text, url }: NotificationProps) {
	const setRecoilCounter = useSetRecoilState<boolean>(modalViewNotification)
	const navigate = useNavigate()
	const onClickBtn = () => {
		setRecoilCounter(() => false)
		if (url) {
			navigate(url)
		}
	}

	return (
		<S.Wrapper>
			<S.Box>
				<Warning_Icon size={'65'} />
				<S.Text>{text}</S.Text>
				<Button size={'normal'} onClick={onClickBtn}>
					확인
				</Button>
			</S.Box>
		</S.Wrapper>
	)
}
export default NotificationModal

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.7);
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
