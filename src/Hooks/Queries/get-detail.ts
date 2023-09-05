import { useQuery } from '@tanstack/react-query'

import MeetingApi from '../../Apis/MeetingApi'

export type Comments = {
	meetingTitle: string
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
		contents: string
		createdTime: string
		expectedPeriod: number
		hits: number
		likeStatus: boolean
		likes: number
		personnelNumber: number
		meetingId: number
		meetingProfileImages: []
		meetingStatus: 'PROGRESS' | 'COMPLETED'
		title: string
		writerId?: string
		writerNickname: string
		writerProfileImages: { filePath: string } | null
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
