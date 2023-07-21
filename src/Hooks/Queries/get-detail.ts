import { useQuery } from '@tanstack/react-query'

import PostApi from '../../Apis/PostApi'

const getDetailData = async (postId: number) => {
	const res = await PostApi.getDetail({ postId })

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
