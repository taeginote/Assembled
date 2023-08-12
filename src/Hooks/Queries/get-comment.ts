import { useQuery } from '@tanstack/react-query'
import CommentApi from '../../Apis/CommentApi'

const getCommentData = async (userId: string | null, page: null | number) => {
	const res = await CommentApi.getUserComment({ userId, page })
	return res.data
}

const useGetCommentData = (userId: string | null, page: null | number) => {
	//보류
	const { data, isLoading, refetch } = useQuery<any, boolean>(
		['useGetCommentData', page],
		() => getCommentData(userId, page),
	)
	return { data, isLoading, refetch }
}

export default useGetCommentData
