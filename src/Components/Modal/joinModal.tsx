import { styled } from 'styled-components'
import { childrenType } from '../../Types/type'
import { FlexCenterCSS } from '../../Styles/common'

function JoinModal(Props: childrenType) {
	const { children } = Props
	return (
		<S.Wrapper>
			<S.Box>
				<S.Logo src="/assets/img/Logo.png" />
				{children}
			</S.Box>
		</S.Wrapper>
	)
}
export default JoinModal

const Wrapper = styled.div`
	position: fixed;
	top: -3rem;
	left: 0;
	height: 200vh;
	width: 100%;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.7);
	${FlexCenterCSS}
`
const Logo = styled.img`
	width: 15rem;
`
const Box = styled.div`
	width: 45rem;
	padding: 2rem 0;
	text-align: center;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.COLOR.common.white};
	border: none;
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
			top: 30%;
		}
	}
`

const S = { Wrapper, Box, Logo }
