import styled from 'styled-components'

import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { SmallDownIcon } from '../../../Icons/Icons'
import { FlexAlignCSS, FlexColumnCSS } from '../../../Styles/common'

function AdminSideFilterNav() {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const [selectTitle, setSelectTitle] = useState<string | null>(null)

	const currentPage = pathname.split('/')[2]

	const myPageFilterList = [
		{
			sort: '카테고리',
			title: '/admin',
			depth: 1,
			children: [],
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
		</S.Wrapper>
	)
}
export default AdminSideFilterNav

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
