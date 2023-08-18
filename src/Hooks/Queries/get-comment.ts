import { useQuery } from '@tanstack/react-query'
import CommentApi from '../../Apis/CommentApi'

type Content = {
	commentId: number
	contents: string
	postId: number
	profile: []
	userId: number
	writeDate: string
	writerNickname: string
}
interface UseCommentType {
	response: {
		totalPages: number
		content: Content[]
	}
	status: number
	success: boolean
}

const getCommentData = async (userId: string | null, page: null | number) => {
	const res = await CommentApi.getUserComment({ userId, page })
	return res.data
}

const useGetCommentData = (userId: string | null, page: null | number) => {
	//보류
	const { data, isLoading, refetch } = useQuery<UseCommentType, boolean>(
		['useGetCommentData', page],
		() => getCommentData(userId, page),
	)

	return { data, isLoading, refetch }
}

export default useGetCommentData
