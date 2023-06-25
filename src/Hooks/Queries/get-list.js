import { useQuery } from '@tanstack/react-query'
import ListApi from '../../Apis/ListApi'

const getListData = async () => {
	const res = await ListApi.getList()
	return res.data
}

const useGetListData = () => {
	const { data, isLoading, refetch, isError, error } = useQuery(['list'], () =>
		getListData(),
	)
	return { data, isLoading, refetch, isError, error }
}

export default useGetListData
