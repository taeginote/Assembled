import { styled } from 'styled-components'

function SearchAddressModalSkeleton() {
	return (
		<S.Wrapper>
			<S.WrapperBox></S.WrapperBox>
		</S.Wrapper>
	)
}
export default SearchAddressModalSkeleton

const Wrapper = styled.div`
	background: #dddddd;
	min-height: 3vh;
	width: 90%;
	margin-left: 2rem;
	border-radius: 1rem;
	position: relative;
	margin-bottom: 1rem;
	overflow: hidden;
`
const WrapperBox = styled.div`
	width: 20vw;
	min-height: 3vh;
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
