import { useQuery } from '@tanstack/react-query'
import MeetingApi from '../../Apis/MeetingApi'

export type filterType = null | string
export type categoryType = 1 | null | number

export type Content = {
	categoryName: string
	commentCount: number
	contents: string
	expectedPeriod: number
	hits: number
	likeStatus: boolean
	likes: number
	personnelNumber: number
	meetingId: number
	meetingProfileImages: []
	meetingStatus: 'PROGRESS' | 'COMPLETED'
	title: string
	writerId: number
	writerNickname: string
	writerProfileImages: { filePath: string } | null
}
export interface UseListType {
	response: {
		content: Content[]
		totalPages: number
	}
	status: number
	success: boolean
}

const getListData = async (
	page?: number,
	searchBy?: string,
	searchQuery?: string,
	sort?: filterType,
	categoryId?: categoryType,
) => {
	const res = await MeetingApi.getList({
		page,
		searchBy,
		searchQuery,
		sort,
		categoryId,
	})

	return res.data
}

const useGetListData = (
	page?: number,
	searchBy?: string,
	searchQuery?: string,
	sort?: filterType,
	categoryId?: categoryType,
) => {
	const { data, isLoading, refetch } = useQuery<UseListType, boolean>(
		['useGetListData', page, searchBy, searchQuery, sort, categoryId],
		() => getListData(page, searchBy, searchQuery, sort, categoryId),
	)

	return { data, isLoading, refetch }
}

export default useGetListData
