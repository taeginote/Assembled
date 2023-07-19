import { useQuery } from '@tanstack/react-query'
import DetailApi from '../../Apis/DetailApi'

const getDetailData = async (postId: number) => {
	const res = await DetailApi.getDetail({ postId })

	return res.data
}

const useGetDetailData = (postId: number) => {
	//보류
	const { data, isLoading, refetch }: any = useQuery(
		['useGetDetailData', postId],
		() => getDetailData(postId),
	)
	return { data, isLoading, refetch }
}

export default useGetDetailData
