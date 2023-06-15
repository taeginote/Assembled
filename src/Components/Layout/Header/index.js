import styled from 'styled-components'
import {
	FlexAlignCSS,
	FlexBetweenCSS,
	WidthAutoCSS,
} from '../../../Styles/common'
import SearchBar from './Components/SearchBar'
import { Outlet, useNavigate } from 'react-router-dom'

function Haeder() {
	const navigate = useNavigate()
	return (
		<>
			<S.Wrapper>
				<S.Container>
					<div>
						<S.Logo onClick={() => navigate('/')}>어셈블</S.Logo>
						<SearchBar />
					</div>
					<S.HeaderRightBox>
						<S.Select onClick={() => navigate('/login')}>로그인</S.Select>
						<div>|</div>
						<S.Select onClick={() => navigate('/signUp')}>회원가입</S.Select>
					</S.HeaderRightBox>
				</S.Container>
			</S.Wrapper>
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
`
const Logo = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.big};
	color: ${({ theme }) => theme.COLOR.main};
	margin-right: 3rem;
	cursor: pointer;
`
const HeaderRightBox = styled.div`
	${FlexAlignCSS}
	& > * {
		margin-left: 2rem;
	}
`
const Select = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	:hover {
		color: ${({ theme }) => theme.COLOR.hover};
	}
	cursor: pointer;
`
const S = { Wrapper, Container, Logo, HeaderRightBox, Select }
