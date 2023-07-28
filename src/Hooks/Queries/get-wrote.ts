import { useQuery } from '@tanstack/react-query'
import PostApi from '../../Apis/PostApi'

const getWroteData = async (postId: number) => {
	const res = await PostApi.getUserWrote({ postId })

	return res.data
}

const useGetWroteData = (postId: number) => {
	//보류
	const { data, isLoading, refetch }: any = useQuery(
		['useGetWroteData', postId],
		() => getWroteData(postId),
	)
	return { data, isLoading, refetch }
}

export default useGetWroteData
