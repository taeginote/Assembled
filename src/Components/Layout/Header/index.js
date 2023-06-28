import styled from 'styled-components'
import {
	FlexAlignCSS,
	FlexBetweenCSS,
	WidthAutoCSS,
} from '../../../Styles/common'
import SearchBar from './Components/SearchBar'
import { Outlet, useNavigate } from 'react-router-dom'
import MobileFooter from '../Footer/MobileFooter/MobileFooter'

function Haeder() {
	const navigate = useNavigate()
	return (
		<>
			<S.Wrapper>
				<S.Container>
					<div>
						<S.Logo
							src="/assets/img/Logo.png"
							onClick={() => navigate('/')}
						></S.Logo>
						<SearchBar />
					</div>
					<S.HeaderRightBox>
						<div>
							<S.Select onClick={() => navigate('/register')}>
								새 글 쓰기
							</S.Select>
						</div>
						<span>
							<div>|</div>
							<S.Select onClick={() => navigate('/login')}>로그인</S.Select>
							<div>|</div>
							<S.Select onClick={() => navigate('/signUp')}>회원가입</S.Select>
						</span>
					</S.HeaderRightBox>
				</S.Container>
			</S.Wrapper>
			<S.FooterWrapper>
				<MobileFooter />
			</S.FooterWrapper>

			<Outlet />
		</>
	)
}
export default Haeder

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.COLOR.common.white};
	position: fixed;
	width: 100%;
	box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
	z-index: 99;
	padding: 1rem 0;
`
const Container = styled.div`
	${WidthAutoCSS}
	${FlexBetweenCSS}
	&>div {
		${FlexAlignCSS}
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		/* background-color: red; */
	}
`
const Logo = styled.img`
	margin-right: 3rem;
	cursor: pointer;
	width: 20rem;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 18rem;
	}
`
const HeaderRightBox = styled.div`
	& > span {
		${FlexAlignCSS}
		& > * {
			margin-left: 2rem;
		}
	}
`
const Select = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	}
	:hover {
		color: ${({ theme }) => theme.COLOR.hover};
	}
	cursor: pointer;
`
const FooterWrapper = styled.div`
	display: none;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		/* z-index: 100000000; */
		display: block;
		position: fixed;
		bottom: 0;
		width: 100%;
	}
`
const S = { Wrapper, Container, Logo, HeaderRightBox, Select, FooterWrapper }
