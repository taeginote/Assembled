import { useQuery } from '@tanstack/react-query'
import ListApi from '../../Apis/ListApi'

type pageType = number
type categoryType = 'study' | 'project'
type filterType = 'total' | 'like' | 'popular'

const getListData = async (
	page: pageType,
	category: categoryType,
	filter: filterType,
) => {
	const res = await ListApi.getList({ page, category, filter })

	return res.data
}

const useGetListData = (
	page: pageType,
	category: categoryType,
	filter: filterType,
) => {
	const { data, isLoading } = useQuery(
		['useGetListData', page, category, filter],
		() => getListData(page, category, filter),
	)

	return { data, isLoading }
}

export default useGetListData
