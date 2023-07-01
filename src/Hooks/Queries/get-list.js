import { useQuery } from '@tanstack/react-query'
import ListApi from '../../Apis/ListApi'

const getListData = async (category, filter) => {
	const res = await ListApi.getList({ category, filter })

	return res.data
}

const useGetListData = (category, filter) => {
	const { data, isLoading } = useQuery(
		['useGetListData', category, filter],
		() => getListData(category, filter),
	)

	return { data, isLoading }
}

export default useGetListData
