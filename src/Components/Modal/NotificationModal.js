import styled from 'styled-components'
import { FlexCenterCSS } from '../../Styles/common'
import { Warning_Icon } from '../Icons/Icons'
import { useSetRecoilState } from 'recoil'
import Button from '../Button/Button'
import { modalViewNotification } from '../../Atoms/modalView.atom'

function NotificationModal({ text }) {
	const setRecoilCounter = useSetRecoilState(modalViewNotification)
	return (
		<S.Wrapper>
			<S.Box>
				<Warning_Icon size={'65'} />
				<S.Text>{text}</S.Text>
				<Button size={'normal'} onClick={() => setRecoilCounter(false)}>
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
`

const S = { Wrapper, Text, Box }
