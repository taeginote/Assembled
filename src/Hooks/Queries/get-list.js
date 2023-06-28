import { useQuery } from '@tanstack/react-query'
import ListApi from '../../Apis/ListApi'

const getListData = async category => {
	const res = await ListApi.getList({ category })

	return res.data
}

const useGetListData = category => {
	const { data, isLoading } = useQuery(['useGetListData', category], () =>
		getListData(category),
	)

	return { data, isLoading }
}

export default useGetListData
