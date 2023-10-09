import { styled } from 'styled-components'
import {
	ArrowIcon,
	CancelBlackIcon,
	HamburgerIcon,
	HomeIcon,
	LogOutIcon,
} from '../../../../Icons/Icons'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../Contexts/auth'

import { useMutation } from '@tanstack/react-query'
import UserApi from '../../../../Apis/UserApi'
import { FlexAlignCSS, FlexBetweenCSS } from '../../../../Styles/common'
import UserNickNameService from '../../../../Utils/UserNickNameService'
import { eventType } from '../../../../Pages/List/Components/SelectBox/FilterSelectBox'

function Hamburger() {
	const [isView, setIsView] = useState<boolean>(false)

	const [selectTwoDepthList, setSelectTwoDepthList] = useState<{
		name: string
		children: eventType[]
	}>()
	const { pathname } = useLocation()

	const auth = useAuth()
	const navigate = useNavigate()

	const oneDepthList = [
		{
			sort: '모임',
			title: 'meeting',
			depth: 2,
			children: [
				{
					name: '모임 조회',
					url: '/',
				},
				{
					name: '모임 만들기',
					url: '/register',
				},
				{
					name: '내가 활동중인 모임',
					url: '/myPage',
				},
				{
					name: '내가 만든 모임',
					url: '/myPage/meeting/wrote',
				},
				{
					name: '내가 관심있는 모임',
					url: '/myPage/meeting/likes',
				},
			],
		},
		{
			sort: '댓글',
			title: 'comment',
			depth: 2,
			children: [
				{
					name: '내가 작성한 댓글',
					url: '/myPage/comment',
				},
			],
		},
		{
			sort: '마이페이지',
			title: 'setting',
			depth: 2,
			children: [
				{
					name: '내 정보 수정',
					url: '/myPage/setting/userSetting',
				},

				{
					name: '회원 탈퇴',
					url: '/myPage/setting/withdrawal',
				},
			],
		},
	]

	const { mutate } = useMutation(() => UserApi.postLogout(), {
		onSuccess: () => {
			auth.logout()
			setIsView(false)
		},
	})

	const onLogOut = () => {
		mutate()
	}

	useEffect(() => {
		setIsView(false)

		setSelectTwoDepthList({
			name: oneDepthList[0].title,
			children: oneDepthList[0].children,
		})
	}, [pathname])

	const onClickHome = () => {
		navigate('/')
		setIsView(false)
	}

	const userNickName = UserNickNameService.getNickName()

	return (
		<>
			<S.Wrapper>
				<HamburgerIcon onClick={() => setIsView(!isView)} />
				{isView && (
					<S.ListBox>
						<S.Head>
							<HomeIcon onClick={onClickHome} />
							<div>
								<LogOutIcon onClick={onLogOut} />
								<CancelBlackIcon onClick={() => setIsView(!isView)} />
							</div>
						</S.Head>
						<S.UserInfo>
							안녕하세요.
							<div onClick={() => navigate('/myPage/setting/userSetting')}>
								{userNickName}님 <ArrowIcon rotate={0} />
							</div>
						</S.UserInfo>
						<S.ListWrapper>
							<S.ListOneDepth>
								{oneDepthList.map((el, idx: number) => (
									<S.OneDepthTitle
										key={idx}
										$status={el.title === selectTwoDepthList?.name}
										onClick={() =>
											setSelectTwoDepthList({
												name: el.title,
												children: el.children,
											})
										}
									>
										{el.sort} <ArrowIcon rotate={90} />
									</S.OneDepthTitle>
								))}
							</S.ListOneDepth>
							<>
								<S.ListTwoDepth>
									{selectTwoDepthList?.children.map((el, idx: number) => (
										<S.TwoDepthTitle
											key={idx}
											onClick={() => navigate(el.url)}
											$status={el.url === pathname}
										>
											{el.name}
										</S.TwoDepthTitle>
									))}
								</S.ListTwoDepth>
							</>
						</S.ListWrapper>
					</S.ListBox>
				)}
			</S.Wrapper>
		</>
	)
}
export default Hamburger

const Wrapper = styled.div`
	position: relative;
	display: none;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		display: block;
	}
`
const ListBox = styled.ul`
	position: absolute;
	width: 104vw;
	height: 100vh;
	top: -3rem;
	right: -3rem;
	background-color: ${({ theme }) => theme.COLOR.common.white};
	padding-top: 3rem;
	animation: hamburger 1s ease;
	animation-duration: 0.8s;
	animation-timing-function: ease;
	@keyframes hamburger {
		0% {
			transform: translateX(60%);
		}
		100% {
			transform: translateX(0);
		}
	}
`
const Head = styled.div`
	padding-right: 3rem;
	margin: 0 2rem;
	${FlexBetweenCSS}
	&>div {
		${FlexAlignCSS}
		* {
			margin-right: 1rem;
		}
	}
`
const UserInfo = styled.div`
	padding: 3rem 0 3rem 2rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	${FlexAlignCSS}
	border-bottom: 0.4px solid ${({ theme }) => theme.COLOR.common.gray[300]};
	& > div {
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
		${FlexAlignCSS}
		margin-left: 1rem;
	}
`
const ListWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`
const ListOneDepth = styled.div`
	width: 35%;
	height: 100%;
	background-color: ${({ theme }) => theme.COLOR.common.gray[100]};
`
const OneDepthTitle = styled.div<{ $status: boolean }>`
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	padding: 1.5rem 1rem 1.5rem 3rem;
	${FlexAlignCSS}
	justify-content: space-between;
	background-color: ${({ theme, $status }) =>
		$status ? theme.COLOR.sub : theme.COLOR.common.gray[100]};
`
const TwoDepthTitle = styled.div<{ $status: boolean }>`
	border-bottom: 1px solid
		${({ theme, $status }) => ($status ? theme.COLOR.common.gray[200] : 'none')};
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	font-family: ${({ theme, $status }) =>
		$status ? theme.FONT_WEIGHT.bold : theme.FONT_WEIGHT.regular};
	padding: 1.5rem;
	margin: 0 5rem 0 3rem;
`
const ListTwoDepth = styled.div`
	width: 65%;
	height: 100%;
`
const S = {
	Wrapper,
	ListBox,
	UserInfo,
	Head,
	ListWrapper,
	ListOneDepth,
	ListTwoDepth,
	OneDepthTitle,
	TwoDepthTitle,
}
