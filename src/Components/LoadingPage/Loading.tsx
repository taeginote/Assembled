import styled from 'styled-components'

function LoadingPage() {
	return (
		<S.Wrapper>
			<img src="/assets/img/LogoTotal.png" />
		</S.Wrapper>
	)
}
export default LoadingPage
const Wrapper = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: 999;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	& > img {
		width: 28rem;
		-webkit-animation: spin 2s linear infinite;
		animation: spin 2s linear infinite;
		@-webkit-keyframes spin {
			0% {
				-webkit-transform: rotate(0deg);
			}
			100% {
				-webkit-transform: rotate(360deg);
			}
		}

		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
`
const S = { Wrapper }
