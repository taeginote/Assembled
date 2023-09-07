import styled from 'styled-components'
import { FlexAlignCSS, FlexColumnCSS } from '../../../Styles/common'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { SmallDownIcon } from '../../../Icons/Icons'
import { useRecoilState } from 'recoil'
import { userRole } from '../../../Atoms/UserRole.atom'

function SideFilterNav() {
	const [recoilCounter] = useRecoilState<string | null>(userRole)

	const navigate = useNavigate()
	const { pathname } = useLocation()
	const [selectTitle, setSelectTitle] = useState<string | null>(null)

	const currentPage = pathname.split('/')[2]

	const myPageFilterList = [
		{
			sort: '활동중인 모임',
			title: '/myPage',
			depth: 1,
			children: [],
		},
		{
			sort: '모임',
			title: 'meeting',
			depth: 2,
			children: [
				{
					name: '내가 만든 모임',
					url: '/meeting/wrote',
				},
				{
					name: '내가 관심있는 모임',
					url: '/meeting/likes',
				},
				{
					name: '내가 가입 신청한 모임',
					url: '/meeting/join',
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
					url: '/comment',
				},
			],
		},
		{
			sort: '설정',
			title: 'setting',
			depth: 2,
			children: [
				{
					name: '내 정보 수정',
					url: '/setting/userSetting',
				},
				{
					name: '회원 탈퇴',
					url: '/setting/withdrawal',
				},
			],
		},
	]

	const onClickOneDepth = (title: string) => {
		navigate(title)
		setSelectTitle(null)
	}

	useEffect(() => {
		setSelectTitle(currentPage)
	}, [])

	return (
		<S.Wrapper>
			{myPageFilterList.map((el, idx) => (
				<>
					{el.depth === 2 ? (
						<S.OneDepthBox
							key={idx}
							onClick={
								selectTitle === el.title
									? () => setSelectTitle(null)
									: () => setSelectTitle(el.title)
							}
						>
							{el.sort}
							<div>
								<SmallDownIcon />
							</div>
						</S.OneDepthBox>
					) : (
						<S.OneDepthBox key={idx} onClick={() => onClickOneDepth(el.title)}>
							{el.sort}
						</S.OneDepthBox>
					)}
					<>
						{el.title === selectTitle &&
							el.children.map((two, idx) => (
								<S.TwoDepthBox
									key={idx}
									onClick={() => navigate(`/myPage${two.url}`)}
									$state={`/myPage${two.url}` === pathname}
								>
									{two.name}
								</S.TwoDepthBox>
							))}
					</>
				</>
			))}
			{recoilCounter === 'ADMIN' && (
				<S.OneDepthBox onClick={() => navigate('/admin')}>
					관리자 페이지
				</S.OneDepthBox>
			)}
		</S.Wrapper>
	)
}
export default SideFilterNav

const Wrapper = styled.div`
	min-width: 15rem;
	${FlexColumnCSS}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		display: none;
	}
`

const OneDepthBox = styled.div`
	background-color: #fafafa;
	width: 140%;
	min-height: 4.7rem;
	cursor: pointer;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	padding: 0.7rem 1rem;
	border: 1px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	${FlexAlignCSS}
	justify-content: space-between;
`
const TwoDepthBox = styled.div<{ $state: boolean }>`
	width: 140%;
	min-height: 4.3rem;
	@keyframes dropdown {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(0);
		}
	}
	animation: dropdown 0.4s ease;
	cursor: pointer;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	${FlexAlignCSS};
	padding: 0.5rem 0 0.5rem 1.5rem;
	background-color: ${({ $state }) => ($state ? '#EEE' : '#ffffff')};
	border: 1px solid ${({ theme }) => theme.COLOR.common.gray[100]};

	border-top: none;
	&:hover {
		background-color: #eee;
	}
`

const S = { Wrapper, OneDepthBox, TwoDepthBox }
