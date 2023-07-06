import { useSetRecoilState } from 'recoil'
import { Question_Icon } from '../../Icons/Icons.js'
import styled from 'styled-components'
import { FlexCenterCSS } from '../../Styles/common'
import Button from '../Button/Button'

import { useNavigate } from 'react-router-dom'
import { modalTypeOneProps } from '../../Types/modalType'
import { modalViewConfirm } from '../../Atoms/modalViewConfirm.atom'

function ConfirmModal({ text }: modalTypeOneProps) {
	const setRecoilCounter = useSetRecoilState(modalViewConfirm)
	const navigate = useNavigate()
	const onClickClose = () => {
		setRecoilCounter(false)
		navigate('/')
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
						onClick={() => setRecoilCounter(false)}
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
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	z-index: 9999;
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
	& > span {
		* {
			margin: 0 1rem;
		}
	}
`
const S = { Wrapper, Text, Box }
