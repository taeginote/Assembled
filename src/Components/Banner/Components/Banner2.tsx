import styled from 'styled-components'
import { FlexCenterCSS } from '../../../Styles/common'
// import '../../../../public'
function Banner2() {
	return (
		<S.Wrapper>
			<S.Content>
				<S.Title>어셈블 OPEN</S.Title>
				<S.Dec>여러분의 모임을 만들고, 관리해보자</S.Dec>
			</S.Content>
			<img src="assets/img/open-book.png" alt="BannerIcon" />
		</S.Wrapper>
	)
}
export default Banner2

const Wrapper = styled.div`
	background-color: #99ccff;
	height: 40rem;
	${FlexCenterCSS}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		height: 32rem;
	}
	img {
		width: 20rem;
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
