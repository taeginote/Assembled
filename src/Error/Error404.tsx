import styled from 'styled-components'
import { FlexCenterCSS } from '../Styles/common'
import Button from '../Components/Button/Button'
import { useNavigate } from 'react-router-dom'

function Error404() {
	const navigate = useNavigate()
	return (
		<S.Wrapper>
			<div>
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
	&>div {
		margin-bottom: 7rem;

		& > div {
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
`
const StyledButton = styled(Button)`
	width: 80%;
`
const S = { Wrapper, ErrorTitle, StyledButton }
