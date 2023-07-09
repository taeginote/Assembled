import styled from 'styled-components'

import { useSetRecoilState } from 'recoil'

import { useNavigate } from 'react-router-dom'
import { Clap_Icon } from '../Icons/Icons'
import { modalTypeTwoProps } from '../Types/modalType'
import { modalViewSuccess } from '../Atoms/modalViewSuccess.atom'
import Button from '../Components/Button/Button'
import { FlexCenterCSS } from '../Styles/common'

function SuccessModal({ text, url }: modalTypeTwoProps) {
	const setRecoilCounter = useSetRecoilState(modalViewSuccess)
	const navigate = useNavigate()
	const onClickOkBtn = () => {
		setRecoilCounter(false)

		if (url === undefined) return navigate('/')
		navigate(`${url}`)
	}
	return (
		<S.Wrapper>
			<S.Box>
				<Clap_Icon />
				<S.Text>{text}</S.Text>
				<Button size={'normal'} onClick={onClickOkBtn}>
					확인
				</Button>
			</S.Box>
		</S.Wrapper>
	)
}
export default SuccessModal

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
