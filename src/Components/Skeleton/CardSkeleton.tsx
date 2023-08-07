import { styled } from 'styled-components'

function CardSkeleton() {
	return (
		<S.Wrapper>
			<S.WrapperBox></S.WrapperBox>
			<S.Text></S.Text>
			<S.Img></S.Img>
			<S.Info></S.Info>
		</S.Wrapper>
	)
}
export default CardSkeleton

const Wrapper = styled.div`
	background: #f2f2f2;
	min-height: 30vh;
	width: 100%;
	height: 100%;
	border-radius: 2rem;
	display: flex;
	justify-content: center;
	position: relative;
	overflow: hidden;
`
const WrapperBox = styled.div`
	width: 30%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.4);
	box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
	animation: loading 2s infinite;
	@keyframes loading {
		0% {
			transform: translateX(-400%);
		}
		50% {
			transform: translateX(-300%);
		}
		100% {
			transform: translateX(230%);
		}
	}
`
const Text = styled.div`
	width: 83%;
	text-align: center;
	background-color: #dddddd;
	height: 65%;
	border-radius: 1.5rem;
	position: absolute;
	top: 2rem;
`
const Img = styled.div`
	background-color: #dddddd;
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	position: absolute;
	bottom: 2rem;
	left: 2.5rem;
`
const Info = styled.div`
	background-color: #dddddd;
	position: absolute;
	bottom: 3rem;
	right: 3rem;
	width: 15rem;
	height: 3rem;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 10rem;
	}
`
const S = {
	Wrapper,
	WrapperBox,
	Text,
	Img,
	Info,
}
