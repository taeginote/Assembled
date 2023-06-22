import styled from 'styled-components'
import {
	ColumnNumberCSS,
	GridCenterCSS,
	WidthAutoCSS,
} from '../../Styles/common'
import ItemBox from '../../Components/ItemBox/ItemBox'
import Banner from '../../Components/Banner'
import FilterSelectBox from '../../Components/SelectBox/FilterSelectBox'
// import CategoryCarousel from './Components/CategoryCarousel/CategoryCarousel'
import CategoryNav from './Components/CategoryNav/CategoryNav'

function List() {
	let a = []
	for (let b = 0; b < 20; b++) {
		a.push('dd')
	}

	return (
		<>
			<S.Wrapper>
				<Banner />

				{/* <CategoryCarousel /> */}

				<S.FilterWrapper>
					<CategoryNav />
					<FilterSelectBox />
				</S.FilterWrapper>
				<S.Container>
					{a.map(() => (
						<ItemBox />
					))}
				</S.Container>
			</S.Wrapper>
		</>
	)
}
export default List

const Wrapper = styled.div``
const Container = styled.div`
	${WidthAutoCSS}
	${GridCenterCSS}
	${ColumnNumberCSS(4)};
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
		${ColumnNumberCSS(2)};
	}
`
const FilterWrapper = styled.div`
	${WidthAutoCSS}
	display:flex;
	align-items: center;
	padding: 2rem 0 3rem 0;
`
const S = { Wrapper, Container, FilterWrapper }
