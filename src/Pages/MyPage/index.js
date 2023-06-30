import styled from 'styled-components'
import { FlexCenterCSS, TopPadding, WidthAutoCSS } from '../../Styles/common'
import SideFilterNav from './Components/SideFilterNav'
import Active from './Components/Active'

function Mypage() {
	return (
		<S.Wrapper>
			<S.Container>
				<SideFilterNav />
				<span>
					<Active />
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
	& > span {
		width: 100%;

		display: flex;
		justify-content: center;
	}
`
const S = { Wrapper, Container }
