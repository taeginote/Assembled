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
				<Button onClick={() => navigate('/')}>다시 어셈블로 가볼까요?</Button>
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
	}
`
const ErrorTitle = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.huge};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	color: ${({ theme }) => theme.COLOR.hover};
	margin-bottom: 3rem;
`
const S = { Wrapper, ErrorTitle }
