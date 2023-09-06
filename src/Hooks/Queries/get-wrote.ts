import { useQuery } from '@tanstack/react-query'
import MeetingApi from '../../Apis/MeetingApi'

export type Content = {
	categoryName: string
	commentCount: number
	description: string

	hits: number
	likeStatus: false
	likes: number
	activityUserCount: number
	meetingId: number
	meetingProfileImages: []
	meetingStatus: 'PROGRESS' | 'COMPLETED'
	name: string
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

const getWroteData = async (meetingId: string | null, page: null | number) => {
	const res = await MeetingApi.getUserWrote({ meetingId, page })
	return res.data
}

const useGetWroteData = (meetingId: string | null, page: null | number) => {
	const { data, isLoading, refetch } = useQuery<UseWroteType, boolean>(
		['useGetWroteData', page],
		() => getWroteData(meetingId, page),
	)

	return { data, isLoading, refetch }
}

export default useGetWroteData
