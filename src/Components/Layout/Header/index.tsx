import styled from 'styled-components'
import { Outlet, useNavigate } from 'react-router-dom'
import {
	FlexAlignCSS,
	FlexBetweenCSS,
	WidthAutoCSS,
} from '../../../Styles/common'
import { useAuth } from '../../../Contexts/auth'
import SuccessModal from '../../Modal/successModal'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Hamburger from './MobileHamburger/Hamburger'
import UserApi from '../../../Apis/UserApi'
import { useState } from 'react'
import TokenModal from '../../Modal/tokenModal'
import { modalViewToken } from '../../../Atoms/modalViewToken'
import { useRecoilState } from 'recoil'

// import MobileFooter from '../Footer/MobileFooter/MobileFooter'

function Haeder() {
	const navigate = useNavigate()
	const auth = useAuth()
	const queryClient = useQueryClient()

	const [successModal, setSuccessModal] = useState<boolean>(false)
	const [recoilCounter, setRecoilCounter] =
		useRecoilState<boolean>(modalViewToken)

	const { mutate } = useMutation(() => UserApi.postLogout(), {
		onSuccess: () => {
			setSuccessModal(() => true)
			auth.logout()
		},
	})

	const onClickLogOut = () => {
		mutate()
	}

	const goLogo = () => {
		navigate('/')
		window.location.reload()
	}

	//mobileFooter쓰면 useContext 오류 뜸

	return (
		<>
			<S.Wrapper>
				<S.Container>
					<div>
						<S.Logo
							src="/assets/img/Logo.png"
							alt="Logo"
							onClick={goLogo}
						></S.Logo>
					</div>
					<S.HeaderRightBox>
						{auth.accessToken == null ? (
							<S.NotLogIn>
								<S.Select onClick={() => navigate('/login')}>로그인</S.Select>
								<div>|</div>
								<S.Select onClick={() => navigate('/signUp')}>
									회원가입
								</S.Select>
							</S.NotLogIn>
						) : (
							<div>
								<S.LogIn>
									<div>
										<S.Select onClick={() => navigate('/register')}>
											새 글 쓰기
										</S.Select>
									</div>
									<div>|</div>
									<S.Select onClick={() => navigate('/myPage')}>
										마이페이지
									</S.Select>
									<div>|</div>
									<S.Select onClick={onClickLogOut}>로그아웃</S.Select>
								</S.LogIn>
								<Hamburger />
							</div>
						)}
					</S.HeaderRightBox>
				</S.Container>
			</S.Wrapper>
			<S.FooterWrapper>{/* <MobileFooter /> */}</S.FooterWrapper>
			{successModal && (
				<SuccessModal
					text={'로그아웃 되었습니다.'}
					setState={setSuccessModal}
				/>
			)}
			{recoilCounter && <TokenModal />}
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
	}
`
const Logo = styled.img`
	margin-right: 3rem;
	cursor: pointer;
	width: 20rem;
	height: 4.8rem;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 18rem;
		height: 4rem;
	}
`
const HeaderRightBox = styled.div``
const Select = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	}
	:hover {
		color: ${({ theme }) => theme.COLOR.hover};
	}
	cursor: pointer;
`
const FooterWrapper = styled.div`
	display: none;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		display: block;
		position: fixed;
		bottom: 0;
		width: 100%;
	}
`
const NotLogIn = styled.div`
	${FlexAlignCSS}
	&>* {
		margin-left: 2rem;
	}
`
const LogIn = styled.div`
	${FlexAlignCSS}
	* {
		margin-left: 2rem;
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		* {
			margin-left: 0.6rem;
		}
		padding: 0 2rem;
		display: none;
	}
`

const S = {
	Wrapper,
	Container,
	Logo,
	HeaderRightBox,
	Select,
	FooterWrapper,
	NotLogIn,
	LogIn,
}
