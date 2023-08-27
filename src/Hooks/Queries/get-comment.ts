import { useQuery } from '@tanstack/react-query'
import CommentApi from '../../Apis/CommentApi'
import { Comments } from './get-detail'

export interface UseCommentType {
	response: {
		totalPages: number
		content: Comments[]
	}
	status: number
	success: boolean
}

const getCommentData = async (userId: string | null, page: null | number) => {
	const res = await CommentApi.getUserComment({ userId, page })
	return res.data
}

const useGetCommentData = (userId: string | null, page: null | number) => {
	const { data, isLoading, refetch } = useQuery<UseCommentType, boolean>(
		['useGetCommentData', page],
		() => getCommentData(userId, page),
	)

	return { data, isLoading, refetch }
}

export default useGetCommentData
