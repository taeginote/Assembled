import { styled } from 'styled-components'
import { FlexCenterCSS } from '../../Styles/common'
interface BallonType {
	text?: string
}

function Ballon({ text }: BallonType) {
	return <S.BallonText>{text}</S.BallonText>
}
export default Ballon

const BallonText = styled.div`
	top: -4.1rem;
	left: -7rem;
	position: absolute;
	width: 10rem;
	height: 3rem;
	${FlexCenterCSS}

	background: #FCBA5C;
	color: white;
	border-radius: 5px;
	padding: 12px 12.8px;
	z-index: 10000;
	&::after {
		border-top: 10px solid #fcba5c;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 0px solid transparent;
		content: '';
		position: absolute;
		top: 3rem;
		left: 7rem;
	}
`

const S = { BallonText }
