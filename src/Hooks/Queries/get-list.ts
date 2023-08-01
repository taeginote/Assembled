import { useQuery } from '@tanstack/react-query'
import PostApi from '../../Apis/PostApi'

type pageType = number | undefined
type searchByType = string | undefined
type searchQuery = string | undefined
export type filterType = null | string
export type categoryType = 1 | null | number

const getListData = async (
	page: pageType,
	searchBy: searchByType,
	searchQuery?: searchQuery,
	sort?: filterType,
	categoryId?: categoryType,
) => {
	const res = await PostApi.getList({
		page,
		searchBy,
		searchQuery,
		sort,
		categoryId,
	})

	return res.data
}

//보류
const useGetListData = (
	page: pageType,
	searchBy?: searchByType,
	searchQuery?: searchQuery,
	sort?: filterType,
	categoryId?: categoryType,
) => {
	const { data, isLoading, refetch }: any = useQuery(
		['useGetListData', page, searchBy, searchQuery, sort, categoryId],
		() => getListData(page, searchBy, searchQuery, sort, categoryId),
	)

	return { data, isLoading, refetch }
}

export default useGetListData
