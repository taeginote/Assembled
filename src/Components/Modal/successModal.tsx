import styled from 'styled-components'
import { FlexCenterCSS } from '../../Styles/common'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import { modalTypeTwoProps } from '../../Types/modalType'
import { Clap_Icon } from '../../Icons/Icons'

function SuccessModal({ text, url, setState }: modalTypeTwoProps) {
	const navigate = useNavigate()

	const onClickOkBtn = () => {
		if (setState) {
			setState(false)
		}

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
	top: -5rem;
	left: 0;
	height: 110vh;
	min-height: 100%;
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
			/* background-color: transparent; */
			top: -20rem;
		}

		100% {
			/* background-color: rgba(0, 0, 0, 0.7); */
			top: 30%;
		}
	}
`

const S = { Wrapper, Text, Box }
