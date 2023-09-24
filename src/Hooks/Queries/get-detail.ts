import { useQuery } from '@tanstack/react-query'

import MeetingApi from '../../Apis/MeetingApi'

export type Comments = {
	meetingName: string
	commentId: number
	contents: string
	meetingId: number
	userId: number
	writeDate: string
	writerNickname: string
	profile: { filePath: string } | null
}
export interface UseDetailType {
	response: {
		categoryName: string
		commentCount: number
		comments: Comments[]
		description: string
		createdTime: string
		joinRequest: boolean
		hits: number
		likeStatus: boolean
		likes: number
		activityUserCount: number
		meetingId: number
		meetingProfileImages: []
		meetingStatus: 'PROGRESS' | 'COMPLETED'
		name: string
		writerId?: string
		writerNickname: string
		writerProfileImages: { filePath: string } | null
		activity: boolean
		address: string
	}
	status: number
	success: boolean
}

const getDetailData = async (meetingId: number) => {
	const res = await MeetingApi.getDetail({ meetingId })

	return res.data
}

const useGetDetailData = (meetingId: number) => {
	const { data, isLoading, refetch } = useQuery<UseDetailType, boolean>(
		['useGetDetailData', meetingId],
		() => getDetailData(meetingId),
		{
			enabled: !!meetingId,
		},
	)

	return { data, isLoading, refetch }
}

export default useGetDetailData
