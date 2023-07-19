import { useQuery } from '@tanstack/react-query'
import ListApi from '../../Apis/ListApi'

type pageType = number | undefined
type searchByType = string | undefined
type searchQuery = string | undefined

// type categoryType = 'study' | 'project'
// type filterType = 'total' | 'like' | 'popular'

const getListData = async (
	pageNumber: pageType,
	// category?: categoryType,
	// filter?: filterType,
	searchBy?: string,
	searchQuery?: string,
) => {
	const res = await ListApi.getList({
		pageNumber,
		searchBy,
		searchQuery,
		// category,
		// filter,
	})

	return res.data
}

//보류
const useGetListData = (
	pageNumber: pageType,
	// category?: categoryType,
	// filter?: filterType,
	searchBy?: string,
	searchQuery?: string,
) => {
	const { data, isLoading }: any = useQuery(
		['useGetListData', pageNumber, searchBy, searchQuery],
		() => getListData(pageNumber, searchBy, searchQuery),
	)

	return { data, isLoading }
}

export default useGetListData
