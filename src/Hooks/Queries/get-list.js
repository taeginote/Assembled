import { useQuery } from '@tanstack/react-query'
import ListApi from '../../Apis/ListApi'

const getListData = async (page, category, filter) => {
	const res = await ListApi.getList({ page, category, filter })

	return res.data
}

const useGetListData = (page, category, filter) => {
	const { data, isLoading } = useQuery(
		['useGetListData', page, category, filter],
		() => getListData(page, category, filter),
	)

	return { data, isLoading }
}

export default useGetListData
