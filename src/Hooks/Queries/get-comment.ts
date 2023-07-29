import { useQuery } from '@tanstack/react-query'
import CommentApi from '../../Apis/CommentApi'

const getCommentData = async (userId: string | null) => {
	const res = await CommentApi.getUserComment({ userId })

	return res.data
}

const useGetCommentData = (userId: string | null) => {
	//보류
	const { data, isLoading, refetch }: any = useQuery(
		['useGetCommentData', userId],
		() => getCommentData(userId),
	)
	return { data, isLoading, refetch }
}

export default useGetCommentData
