import styled from 'styled-components'
import { FlexCenterCSS } from '../Styles/common'
import Button from '../Components/Button/Button'
import { useNavigate } from 'react-router-dom'

function Error404() {
	const navigate = useNavigate()
	return (
		<S.Wrapper>
			<div>
				<S.ErrorLogo src="/assets/img/404.png" alt="404errorImg" />
				<S.ErrorTitle>페이지를 찾지 못했습니다.</S.ErrorTitle>
				<div>
					<S.StyledButton onClick={() => navigate('/')}>
						다시 어셈블로 가볼까요?
					</S.StyledButton>
				</div>
			</div>
		</S.Wrapper>
	)
}
export default Error404
const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	${FlexCenterCSS}
	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 7rem;
		& > div {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
`
const ErrorTitle = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.huge};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	color: ${({ theme }) => theme.COLOR.hover};
	margin-bottom: 5rem;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
	}
`
const StyledButton = styled(Button)`
	width: 80%;
`
const ErrorLogo = styled.img`
	width: 40rem;
	height: 25rem;
`
const S = { Wrapper, ErrorTitle, StyledButton, ErrorLogo }
