import { styled } from 'styled-components'
import { FlexCenterCSS } from '../../Styles/common'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import { FlexColumnCSS } from '../../Styles/common'
import { FlexAlignCSS } from '../../Styles/common'
import AdminSideFilterNav from './Components/AdminSideFilterNav'

function Admin() {
	const navigate = useNavigate()

	return (
		<S.Wrapper>
			<S.Box>
				<S.Header>
					<div>
						<span>Assemble</span>
						관리자 페이지
					</div>
					<Button
						size="big"
						variant="default-white"
						onClick={() => navigate('/')}
					>
						홈으로 가기
					</Button>
				</S.Header>
				<S.Section>
					<AdminSideFilterNav />
					<span>
						<Outlet />
					</span>
				</S.Section>
			</S.Box>
		</S.Wrapper>
	)
}
export default Admin

const Wrapper = styled.div`
	width: 100vw;
	min-height: 100vh;

	${FlexCenterCSS}
`
const Box = styled.div`
	width: 90%;
	min-height: 100vh;
	padding-top: 4rem;
	${FlexColumnCSS}
`
const Header = styled.h3`
	${FlexAlignCSS}
	justify-content: space-between;
	margin-bottom: 5rem;
	& > div {
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
		& > span {
			font-size: ${({ theme }) => theme.FONT_SIZE.big};
			color: ${({ theme }) => theme.COLOR.hover};
			margin-right: 1rem;
		}
	}
`
const Section = styled.div`
	display: flex;
	& > span {
		margin-left: 20rem;
	}
`
const S = { Wrapper, Box, Header, Section }
