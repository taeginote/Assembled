import { styled } from 'styled-components'
import { FlexAlignCSS, TopPadding } from '../../Styles/common'

function MeetingActivity() {
	return (
		<S.Wrapper>
			<S.Left>d</S.Left>
			<S.Right>d</S.Right>
		</S.Wrapper>
	)
}
export default MeetingActivity

const Wrapper = styled.div`
	${FlexAlignCSS}
`
const Left = styled.div`
	${TopPadding}
	width: 20%;
	min-height: 100vh;
	background-color: yellow;
`
const Right = styled.div`
	${TopPadding}
	width: 80%;
	min-height: 100vh;
	background-color: blue;
`

const S = { Wrapper, Left, Right }
