import { useQuery } from '@tanstack/react-query'
import PostApi from '../../Apis/PostApi'

export type Content = {
	categoryName: string
	commentCount: number
	contents: string
	expectedPeriod: number
	hits: number
	likeStatus: false
	likes: number
	personnelNumber: number
	postId: number
	postProfileImages: []
	postStatus: 'PROGRESS' | 'COMPLETED'
	title: string
	writerId: number
	writerNickname: string
	writerProfileImages: any
}
export interface UseWroteType {
	response: {
		content: Content[]
		totalPages: number
	}
	status: number
	success: boolean
}

const getWroteData = async (postId: string | null, page: null | number) => {
	const res = await PostApi.getUserWrote({ postId, page })

	return res.data
}

const useGetWroteData = (postId: string | null, page: null | number) => {
	//보류
	const { data, isLoading, refetch } = useQuery<UseWroteType, boolean>(
		['useGetWroteData', page],
		() => getWroteData(postId, page),
	)

	return { data, isLoading, refetch }
}

export default useGetWroteData
