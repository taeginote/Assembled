import styled from 'styled-components'
import { WidthAutoCSS } from '../../../../Styles/common'
import { FlexAlignCSS } from '../../../../Styles/common'
import { Link, useSearchParams } from 'react-router-dom'
import useGetCategoryData from '../../../../Hooks/Queries/get-category'
import Categorykeleton from '../../../../Components/Skeleton/CategorySkeleton'

import SwiperCore, {
	Autoplay,
	EffectFade,
	Navigation,
	Pagination,
	Scrollbar,
} from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

SwiperCore.use([Autoplay, EffectFade, Pagination])

export type Category = {
	categoryId: number
	categoryName: string
}

function CategoryNav() {
	SwiperCore.use([Navigation, Scrollbar])

	const [searchParams] = useSearchParams()
	let category: number | null = Number(searchParams.get('category')) || null

	const { data, isLoading } = useGetCategoryData()

	return (
		<S.Wrapper>
			<S.Container>
				{isLoading ? (
					<Categorykeleton />
				) : (
					<>
						<S.NavBox $state={category === null}>
							<Link to={'/'}>전체</Link>
						</S.NavBox>

						{data?.response?.map((el: Category, idx: number) => (
							<S.NavBox key={idx} $state={el.categoryId === category}>
								<Link to={`?category=${el.categoryId}`}>{el.categoryName}</Link>
							</S.NavBox>
						))}
					</>
				)}
			</S.Container>
		</S.Wrapper>
	)
}

export default CategoryNav
const Wrapper = styled.div`
	${WidthAutoCSS}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		margin-bottom: 3rem;
	}
`
const Container = styled.div`
	${FlexAlignCSS}
`
//스타일 props
const NavBox = styled.div<{ $state: boolean }>`
	margin-right: 4rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};

	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		margin-right: 2rem;
	}

	cursor: pointer;
	border-bottom: 3px solid
		${({ theme, $state }) => ($state ? theme.COLOR.hover : 'none')};
	& > a {
		text-decoration: none;
		color: ${({ theme, $state }) =>
			$state ? 'black' : theme.COLOR.common.gray[200]};
	}
`
const S = { Wrapper, Container, NavBox }
