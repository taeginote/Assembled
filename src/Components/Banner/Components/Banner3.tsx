import styled from 'styled-components'
import { FlexCenterCSS } from '../../../Styles/common'
// import '../../../../public'
function Banner3() {
	return (
		<S.Wrapper>
			<S.Content>
				<S.Title>모임 혹은 스터디 어디 없을까?</S.Title>
				<S.Dec>주말 혹은 남는시간을 이용해 모임 하나 가입해보자</S.Dec>
			</S.Content>
			<img src="assets/img/question-mark.png" alt="BannerIcon" />
		</S.Wrapper>
	)
}
export default Banner3

const Wrapper = styled.div`
	background-color: #f9e586;
	height: 40rem;
	${FlexCenterCSS}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		height: 32rem;
	}
	img {
		width: 25rem;
		padding: 2rem 6rem 0 0;
		@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			width: 18rem;
			margin-left: 4rem;
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
