import styled from 'styled-components'
import {
	ColumnNumberCSS,
	GridCenterCSS,
	WidthAutoCSS,
} from '../../Styles/common'
import ItemBox from '../../Components/ItemBox/ItemBox'
import Banner from '../../Components/Banner'
import CategoryNav from './Components/CategoryNav/CategoryNav'
import useGetListData from '../../Hooks/Queries/get-list'
import LoadingPage from '../../Components/LoadingPage/Loading'
import { useNavigate, useSearchParams } from 'react-router-dom'
import FilterSelectBox from './Components/SelectBox/FilterSelectBox'
import Pagination from '../../Components/Pagination/Pagination'
import { useState } from 'react'

function List() {
	const [searchParams, setSearchParams] = useSearchParams()
	// let category: string = searchParams.get('category')!
	let category = searchParams.get('category')
	let filter = searchParams.get('filter')
	let page = searchParams.get('page')
	const [currentPage, setCurrentPage] = useState(page)
	//여기같은 부분은 page를 넣으면 아직 오류 해결하지 못하였음

	const { data, isLoading } = useGetListData(currentPage, category, filter)

	const totalPage = 3

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
						{data.response.map(data => (
							<ItemBox data={data} />
						))}
					</S.Container>
				)}
			</S.Wrapper>
			<Pagination
				totalPage={totalPage}
				limit={10}
				scroll={765}
				setPage={setCurrentPage}
			/>
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
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
		flex-direction: column;
		align-items: start;

		* {
			margin-bottom: 1rem;
		}
	}
`
const S = { Wrapper, Container, FilterWrapper }
