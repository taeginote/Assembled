import styled from 'styled-components'
import {
	ColumnNumberCSS,
	GridCenterCSS,
	WidthAutoCSS,
} from '../../Styles/common'

import Banner from '../../Components/Banner'
import CategoryNav from './Components/CategoryNav/CategoryNav'
import useGetListData from '../../Hooks/Queries/get-list'
import LoadingPage from '../../Components/LoadingPage/Loading'
import { useNavigate, useSearchParams } from 'react-router-dom'
import FilterSelectBox from './Components/SelectBox/FilterSelectBox'

import { useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination'
import ItemBox from '../../Components/ItemBox/ItemBox'
import SearchBar from '../../Components/Layout/Header/Components/SearchBar'

function List() {
	//searchParams 타입을 아직 모르겠음
	const [searchParams, setSearchParams] = useSearchParams()

	let category: any = searchParams.get('category')
	let filter: any = searchParams.get('filter')
	let page: any = searchParams.get('page')
	const [pageNumber, setPageNumber] = useState(page || 1)
	const [searchValue, setSearchValue] = useState<string>('')
	const [selectVal, setSelectVal] = useState({
		title: '제목',
		value: 'title',
	})
	let searchBy = selectVal.value
	let searchQuery = searchValue

	const { data, isLoading } = useGetListData(pageNumber, searchBy, searchQuery)

	const totalPage: number = data?.response?.totalPages

	return (
		<>
			<S.Wrapper>
				<Banner />
				<S.FilterWrapper>
					<CategoryNav />
					<SearchBar
						setSelectVal={setSelectVal}
						selectVal={selectVal}
						searchValue={searchValue}
						setSearchValue={setSearchValue}
					/>
					<FilterSelectBox />
				</S.FilterWrapper>
				{isLoading ? (
					<LoadingPage />
				) : (
					<S.Container>
						{data?.response?.content?.map((data: any, idx: any) => (
							<ItemBox data={data} key={idx} />
						))}
					</S.Container>
				)}
			</S.Wrapper>
			<Pagination
				totalPage={totalPage}
				limit={10}
				scroll={765}
				setPage={setPageNumber}
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
