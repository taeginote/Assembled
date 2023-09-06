import { useQuery } from '@tanstack/react-query'
import MeetingApi from '../../Apis/MeetingApi'

interface IdxSignature {
	[key: string]: string
}
interface Content {
	categoryName: string
	commentCount: number
	description: string

	hits: number
	likeStatus: boolean
	likes: number
	activityUserCount: number
	meetingId: number
	meetingProfileImages?: IdxSignature
	meetingStatus: 'PROGRESS' | 'COMPLETED'
	name: string
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
	const res = await MeetingApi.getUserLike(page)
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
