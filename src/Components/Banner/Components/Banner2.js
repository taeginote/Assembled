import styled from 'styled-components'
import { FlexCenterCSS } from '../../../Styles/common'
// import '../../../../public'
function Banner2() {
	return (
		<S.Wrapper>
			<S.Content>
				<S.Title>어셈블 OPEN</S.Title>
				<S.Dec>모임, 스터디를 하고싶으면 어셈블</S.Dec>
			</S.Content>
			<img src="assets/img/open-book.png" />
		</S.Wrapper>
	)
}
export default Banner2

const Wrapper = styled.div`
	background-color: #99ccff;
	height: 40rem;
	${FlexCenterCSS}

	img {
		width: 25rem;
		padding: 0rem 6rem 0 0;
	}
`
const Content = styled.div`
	width: 37%;
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
