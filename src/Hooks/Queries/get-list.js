import { useQuery } from '@tanstack/react-query'
import ListApi from '../../Apis/ListApi'

const getListData = async () => {
	const res = await ListApi.getList()
	return res.data
}

const useGetListData = () => {
	const { data, isLoading, refetch } = useQuery(['list'], () => getListData())
	return { data, isLoading, refetch }
}

export default useGetListData
