import { styled } from 'styled-components'

function CommentSkeleton() {
	return (
		<S.Wrapper>
			<S.WrapperBox></S.WrapperBox>
			<S.Title></S.Title>
			<S.Text></S.Text>
		</S.Wrapper>
	)
}
export default CommentSkeleton

const Wrapper = styled.div`
	background: #f2f2f2;
	min-height: 4vh;
	width: 100%;
	height: 9rem;
	border-radius: 1rem;
	position: relative;
	margin-bottom: 5rem;
	overflow: hidden;
`
const WrapperBox = styled.div`
	width: 20vw;
	min-height: 4vh;
	height: 9rem;
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
const Title = styled.div`
	width: 15rem;
	height: 3rem;
	background-color: red;
	position: absolute;
	top: 1rem;
	left: 2.5rem;
	border-radius: 1rem;
	background-color: #dddddd;
`
const Text = styled.div`
	width: 30rem;
	height: 3rem;
	background-color: red;
	position: absolute;
	top: 5rem;
	left: 2.5rem;
	border-radius: 1rem;
	background-color: #dddddd;
`

const S = {
	Wrapper,
	WrapperBox,
	Title,
	Text,
}
