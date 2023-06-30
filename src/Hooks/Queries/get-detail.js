import { useQuery } from '@tanstack/react-query'
import DetailApi from '../../Apis/DetailApi'

const getDetailData = async postId => {
	const res = await DetailApi.getDetail({ postId })

	return res.data
}

const useGetDetailData = postId => {
	const { data, isLoading, refetch } = useQuery(
		['useGetDetailData', postId],
		() => getDetailData(postId),
	)
	return { data, isLoading, refetch }
}

export default useGetDetailData
