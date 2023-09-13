import { useQuery } from '@tanstack/react-query'
import JoinApi from '../../Apis/JoinApi'

export interface MyJoinRequestContent {
	createdDate: string
	joinRequestId: number
	meetingId: number
	message: string
	nickname: string
	status: 'APPROVAL' | 'REJECT' | 'CANCEL' | 'REQUEST'
	userId: number
	meetingName: string
}

interface UseMyJoinRequestListType {
	response: {
		content: MyJoinRequestContent[]
		totalPages: number
	}
	status: number
	success: boolean
}
const getMyJoinRequestListData = async (page: number) => {
	const res = await JoinApi.getMyJoinRequestList(page)
	return res.data
}

const useGetMyJoinRequestListData = (page: number) => {
	const { data, isLoading, refetch } = useQuery<
		UseMyJoinRequestListType,
		boolean
	>(['useGetMyJoinRequestListData'], () => getMyJoinRequestListData(page))

	return { data, isLoading, refetch }
}

export default useGetMyJoinRequestListData
