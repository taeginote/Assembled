import { useQuery } from '@tanstack/react-query'
import CommentApi from '../../Apis/CommentApi'

const getCommentData = async (postId: string | null) => {
	const res = await CommentApi.getUserComment({ postId })

	return res.data
}

const useGetCommentData = (postId: string | null) => {
	//보류
	const { data, isLoading, refetch }: any = useQuery(
		['useGetCommentData', postId],
		() => getCommentData(postId),
	)
	return { data, isLoading, refetch }
}

export default useGetCommentData
