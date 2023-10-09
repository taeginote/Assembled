import styled from 'styled-components'

import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FlexAlignCSS, FlexColumnCSS } from '../../../Styles/common'

function AdminSideFilterNav() {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const [, setSelectTitle] = useState<string | null>(null)

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
					<S.OneDepthBox key={idx} onClick={() => onClickOneDepth(el.title)}>
						{el.sort}
					</S.OneDepthBox>
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

const S = { Wrapper, OneDepthBox }
