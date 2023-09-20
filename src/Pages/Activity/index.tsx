import { styled } from 'styled-components'
import { FlexAlignCSS, TopPadding } from '../../Styles/common'
import ActivitySideFilterNav from './Components/ActivitySideFilterNav'

import { Outlet } from 'react-router-dom'

function MeetingActivity() {
	return (
		<S.Wrapper>
			<S.Left>
				<ActivitySideFilterNav />
			</S.Left>
			<S.Right>
				<Outlet />
			</S.Right>
		</S.Wrapper>
	)
}
export default MeetingActivity

const Wrapper = styled.div`
	${FlexAlignCSS}
`
const Left = styled.div`
	${TopPadding}
	width: 13%;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.COLOR.orange};
`

const Right = styled.div`
	${TopPadding}
	width: 97%;
	min-height: 100vh;
`

const S = { Wrapper, Left, Right }
