import styled from 'styled-components'
import {
	ColumnNumberCSS,
	FlexColumnCSS,
	GridCenterCSS,
	WidthAutoCSS,
} from '../../Styles/common'
import ItemBox from '../../Components/ItemBox/ItemBox'
import Banner from '../../Components/Banner'
import FilterSelectBox from '../../Components/SelectBox/FilterSelectBox'
import CategoryCarousel from './Components/CategoryCarousel/CategoryCarousel'

function List() {
	let a = []
	for (let b = 0; b < 20; b++) {
		a.push('dd')
	}

	return (
		<>
			<S.Wrapper>
				<Banner />

				<CategoryCarousel />
				<S.FilterWrapper>
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
	justify-content: end;
	padding: 0 0 3rem 0;
`
const S = { Wrapper, Container, FilterWrapper }
