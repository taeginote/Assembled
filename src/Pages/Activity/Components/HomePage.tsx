import { styled } from 'styled-components'

function HomePage() {
	return (
		<S.Wrapper>
			<S.ImgWrapper>
				<S.Img src="/assets/img/activityHome3.png" />
			</S.ImgWrapper>
			<S.meetingName>
				안녕하세요. <span>드림팀</span> 활동 페이지입니다.
			</S.meetingName>
		</S.Wrapper>
	)
}
export default HomePage

const Wrapper = styled.div`
	width: 100%;
`
const Img = styled.img`
	width: 60%;
`
const ImgWrapper = styled.div`
	width: 100%;
	background-color: #eab39b;
	display: flex;
	justify-content: center;
`
const meetingName = styled.div`
	margin: 2rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
	& > span {
		font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`
const S = { Wrapper, Img, ImgWrapper, meetingName }
