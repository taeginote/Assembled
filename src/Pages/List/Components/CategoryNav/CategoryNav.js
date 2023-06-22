import styled from 'styled-components'
import { WidthAutoCSS } from '../../../../Styles/common'
import { FlexAlignCSS } from '../../../../Styles/common'
import { Link, useSearchParams } from 'react-router-dom'

function CategoryNav() {
	const [searchParams, setSearchParams] = useSearchParams()
	const category = searchParams.get('category')

	const categoryArr = [
		{
			id: 0,
			name: '전체',
			url: 'total',
		},
		{
			id: 1,
			name: '개발/프로그래밍',
			url: 'programming',
		},
		{
			id: 2,
			name: '독서',
			url: 'book',
		},
		{
			id: 3,
			name: '면접 스터디',
			url: 'interview',
		},
		{
			id: 4,
			name: '동아리',
			url: 'club',
		},
	]
	return (
		<S.Wrapper>
			<S.Container>
				{categoryArr.map(el => (
					<S.NavBox state={el.url === category}>
						<Link to={`?category=${el.url}`}>{el.name}</Link>
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
const NavBox = styled.div`
	margin-right: 4rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};

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
