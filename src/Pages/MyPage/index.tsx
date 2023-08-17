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
	${WidthAutoCSS};

	${TopPadding}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		padding-top: 0.1rem;
	}
`
const Container = styled.div`
	margin-top: 10rem;
	display: flex;
	justify-content: space-between;

	& > span {
		display: flex;
		width: 80%;
		@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			width: 100%;
		}
	}
`
const S = { Wrapper, Container }
