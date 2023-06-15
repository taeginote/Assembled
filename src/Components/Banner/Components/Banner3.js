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
			<img src="assets/img/question-mark.png" />
		</S.Wrapper>
	)
}
export default Banner3

const Wrapper = styled.div`
	background-color: #f9e586;
	height: 40rem;
	/* color: ${({ theme }) => theme.COLOR.common.white}; */
	${FlexCenterCSS}
	position: relative;
	img {
		width: 20rem;
		position: absolute;
		right: 45rem;
		top: 13rem;
	}
`
const Content = styled.div`
	width: 55%;
`
const Title = styled.div`
	margin: 4rem 0 1rem 0;
	font-size: ${({ theme }) => theme.FONT_SIZE.big};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
`
const Dec = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.large};
`

const S = { Wrapper, Content, Title, Dec }
