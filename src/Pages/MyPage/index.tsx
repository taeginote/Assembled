import styled from 'styled-components'
import { TopPadding, WidthAutoCSS } from '../../Styles/common'
import SideFilterNav from './Components/SideFilterNav'
import { Outlet } from 'react-router-dom'

function Mypage() {
	return (
		<S.Wrapper>
			<S.Container>
				<SideFilterNav />
				<span>
					<Outlet />
				</span>
			</S.Container>
		</S.Wrapper>
	)
}
export default Mypage

const Wrapper = styled.div`
	${WidthAutoCSS}
	${TopPadding}
`
const Container = styled.div`
	margin-top: 10rem;
	display: flex;
	justify-content: space-between;
	& > span {
		width: 100%;
		display: flex;
		justify-content: center;
	}
`
const S = { Wrapper, Container }
