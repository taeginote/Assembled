import { useQuery } from '@tanstack/react-query'
import ListApi from '../../Apis/ListApi'

const getListData = async (page: number, category: string, filter: string) => {
	const res = await ListApi.getList({ page, category, filter })

	return res.data
}

const useGetListData = (page: number, category: string, filter: string) => {
	const { data, isLoading } = useQuery(
		['useGetListData', page, category, filter],
		() => getListData(page, category, filter),
	)

	return { data, isLoading }
}

export default useGetListData
