import styled from 'styled-components'
import {
	ColumnNumberCSS,
	GridCenterCSS,
	WidthAutoCSS,
} from '../../Styles/common'
import ItemBox from '../../Components/ItemBox/ItemBox'
import Banner from '../../Components/Banner'
import FilterSelectBox from '../../Components/SelectBox/FilterSelectBox'
import CategoryNav from './Components/CategoryNav/CategoryNav'
import useGetListData from '../../Hooks/Queries/get-list'
import LoadingPage from '../../Components/LoadingPage/Loading'

function List() {
	const { data, isLoading, isError, error } = useGetListData()

	console.log(isError, error)

	return (
		<>
			<S.Wrapper>
				<Banner />
				<S.FilterWrapper>
					<CategoryNav />
					<FilterSelectBox />
				</S.FilterWrapper>
				{isLoading ? (
					<LoadingPage />
				) : (
					<S.Container>
						{data.map(data => (
							<ItemBox data={data} />
						))}
					</S.Container>
				)}
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
