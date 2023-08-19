import styled from 'styled-components'
import {
	ColumnNumberCSS,
	GridCenterCSS,
	WidthAutoCSS,
} from '../../Styles/common'
import Banner from '../../Components/Banner'
import CategoryNav from './Components/CategoryNav/CategoryNav'
import useGetListData, {
	categoryType,
	filterType,
} from '../../Hooks/Queries/get-list'
import { useSearchParams } from 'react-router-dom'
import FilterSelectBox from './Components/SelectBox/FilterSelectBox'
import { useEffect, useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination'
import ItemBox from '../../Components/ItemBox/ItemBox'
import SearchBar from './Components/SearchBar/SearchBar'
import ListNoData from '../../Error/ListNoData'
import { ItemDataType } from '../../Types/type'
import CardSkeleton from '../../Components/Skeleton/CardSkeleton'

function List() {
	//보류
	const [searchParams, setSearchParams] = useSearchParams()
	let categoryId: categoryType = Number(searchParams.get('category')) || 1
	let sort: filterType = searchParams.get('sort')
	let pageNumber: number | null = Number(searchParams.get('page'))
	const [page, setPage] = useState(pageNumber || 1)
	const [searchValue, setSearchValue] = useState<string>('')
	const [selectVal, setSelectVal] = useState({
		title: '제목',
		value: 'title',
	})
	let searchBy: string = selectVal.value
	let searchQuery: string = searchValue
	const loadingArr: 0[] = Array(12).fill(0)

	if (categoryId === null) {
		categoryId = 1
	}

	const { data, isLoading, refetch } = useGetListData(
		page,
		searchBy,
		searchQuery,
		sort,
		categoryId,
	)
	const totalPage: number | undefined = data?.response?.totalPages

	useEffect(() => {
		if (pageNumber !== 0) return
		if (pageNumber === 0) {
			setPage(1)
		}
	}, [pageNumber])

	return (
		<>
			<S.Wrapper>
				<Banner />
				<S.FilterWrapper>
					<CategoryNav />
					<S.SearchBarWrap>
						<SearchBar
							setSelectVal={setSelectVal}
							selectVal={selectVal}
							setSearchValue={setSearchValue}
							setPage={setPage}
						/>
					</S.SearchBarWrap>
					<FilterSelectBox />
				</S.FilterWrapper>
				{isLoading ? (
					<S.Container>
						{loadingArr.map((el: 0, idx: number) => (
							<CardSkeleton key={idx} />
						))}
					</S.Container>
				) : (
					<>
						{data?.response?.content?.length === 0 ? (
							<ListNoData setSearchValue={setSearchValue} />
						) : (
							<S.Container>
								{data?.response?.content?.map((data: any, idx: number) => (
									<ItemBox data={data} key={idx} refetch={refetch} />
								))}
							</S.Container>
						)}
					</>
				)}
			</S.Wrapper>
			{data?.response?.content?.length !== 0 && (
				<Pagination
					totalPage={totalPage!}
					limit={10}
					scroll={0}
					setPage={setPage}
				/>
			)}
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
		${ColumnNumberCSS(3)};
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		${ColumnNumberCSS(2)};
	}
`
const FilterWrapper = styled.div`
	${WidthAutoCSS}
	display:flex;
	padding: 1rem 0;
	align-items: center;

	margin-bottom: 1.5rem;

	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		flex-direction: column;
		align-items: flex-start;
		& > div {
			flex-direction: column;
			align-items: center;
			width: 100%;
		}
	}
`
const SearchBarWrap = styled.div`
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		margin-bottom: 1rem;
	}
`

const S = { Wrapper, Container, FilterWrapper, SearchBarWrap }
