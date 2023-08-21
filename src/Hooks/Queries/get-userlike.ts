import { useQuery } from '@tanstack/react-query'
import PostApi from '../../Apis/PostApi'

interface IdxSignature {
	[key: string]: string
}
interface Content {
	categoryName: string
	commentCount: number
	contents: string
	expectedPeriod: number
	hits: number
	likeStatus: boolean
	likes: number
	personnelNumber: number
	postId: number
	postProfileImages?: IdxSignature
	postStatus: 'PROGRESS' | 'COMPLETED'
	title: string
	writerId: number
	writerNickname: string
	writerProfileImages?: IdxSignature
}

export interface UseUserLikeType {
	response: {
		totalPages: number
		content: Content[]
	}
	status: number
	success: boolean
}

const getUserLikeData = async (page: number) => {
	const res = await PostApi.getUserLike(page)
	return res.data
}

const useGetUserLikeData = (page: number) => {
	const { data, isLoading, refetch } = useQuery<UseUserLikeType, boolean>(
		['useGetUserLikeData', page],
		() => getUserLikeData(page),
	)

	return { data, isLoading, refetch }
}

export default useGetUserLikeData
