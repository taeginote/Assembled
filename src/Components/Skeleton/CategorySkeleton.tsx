import { styled } from 'styled-components'

function Categorykeleton() {
	return (
		<S.Wrapper>
			<S.WrapperBox></S.WrapperBox>
		</S.Wrapper>
	)
}
export default Categorykeleton

const Wrapper = styled.div`
	background: #f2f2f2;
	min-width: 22vw;
	min-height: 4vh;
	width: 40vw;
	height: 100%;
	border-radius: 1rem;
	position: relative;
	overflow: hidden;
`
const WrapperBox = styled.div`
	width: 20vw;
	height: 4vh;
	background-color: rgba(255, 255, 255, 0.4);
	box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
	animation: loading 3s infinite;
	@keyframes loading {
		0% {
			transform: translateX(-100%);
		}
		50% {
			transform: translateX(350%);
		}
		100% {
			transform: translateX(800%);
		}
	}
`

const S = {
	Wrapper,
	WrapperBox,
}
