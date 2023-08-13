import styled from 'styled-components'
import { FlexCenterCSS } from '../../../Styles/common'

function Banner1() {
	return (
		<S.Wrapper>
			<S.Content>
				<S.Title>스터디와 모임을 찾고싶다면 어셈블!</S.Title>
				<S.Dec>스터디 멤버를 찾나요? 어셈블에서 찾으세요</S.Dec>
			</S.Content>
			<img src="assets/img/placeholder.png" alt="BannerIcon" />
		</S.Wrapper>
	)
}
export default Banner1

const Wrapper = styled.div`
	background-color: #ffa949;
	height: 40rem;
	${FlexCenterCSS}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		height: 32rem;
	}
	img {
		width: 25rem;
		height: 20rem;
		padding: 2rem 6rem 0 0;
		@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			width: 18rem;
			height: 13rem;
			margin-left: 5rem;
		}
	}
`
const Content = styled.div`
	width: 37%;
`
const Title = styled.div`
	margin: 4rem 0 1rem 0;
	font-size: ${({ theme }) => theme.FONT_SIZE.big};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
		margin: 4rem 0 2rem 0;
	}
`
const Dec = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.large};
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	}
`

const S = { Wrapper, Content, Title, Dec }
