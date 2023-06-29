import { useQuery } from '@tanstack/react-query'
import DetailApi from '../../Apis/DetailApi'

const getDetailData = async assembleId => {
	const res = await DetailApi.getDetail({ assembleId })
	return res.data
}

const useGetDetailData = assembleId => {
	const { data, isLoading, refetch } = useQuery(
		['useGetDetailData', assembleId],
		() => getDetailData(assembleId),
	)
	return { data, isLoading, refetch }
}

export default useGetDetailData
