import styled from 'styled-components'
import { WidthAutoCSS } from '../../../../Styles/common'
import { FlexAlignCSS } from '../../../../Styles/common'
import { Link, useSearchParams } from 'react-router-dom'

function CategoryNav() {
	const [searchParams, setSearchParams] = useSearchParams()
	let category = searchParams.get('category')
	let filter = searchParams.get('filter')

	if (category === null) {
		category = 'total'
	}
	if (filter === null) {
		filter = 'recent'
	}

	const categoryArr = [
		{
			id: 0,
			name: '전체',
			url: 'total',
		},
		{
			id: 1,
			name: '스터디',
			url: 'study',
		},
		{
			id: 2,
			name: '프로젝트',
			url: 'project',
		},
	]

	return (
		<S.Wrapper>
			<S.Container>
				{categoryArr.map((el, idx) => (
					<S.NavBox key={idx} state={el.url === category}>
						<Link to={`?category=${el.url}&filter=${filter}`}>{el.name}</Link>
					</S.NavBox>
				))}
			</S.Container>
		</S.Wrapper>
	)
}

export default CategoryNav
const Wrapper = styled.div`
	${WidthAutoCSS}
`
const Container = styled.div`
	${FlexAlignCSS}
`
//스타일 props
const NavBox = styled.div<{ state: boolean }>`
	margin-right: 4rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		margin-right: 2rem;
	}
	cursor: pointer;
	border-bottom: 3px solid
		${({ theme, state }) => (state ? theme.COLOR.hover : 'none')};
	& > a {
		text-decoration: none;
		color: ${({ theme, state }) =>
			state ? 'black' : theme.COLOR.common.gray[200]};
	}
`
const S = { Wrapper, Container, NavBox }
