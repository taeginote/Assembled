import { useQuery } from '@tanstack/react-query'

import JoinApi from '../../Apis/JoinApi'

export type Content = {
	createdDate: string
	joinRequestId: number
	message: null | string
	nickname: string
	meetingId: number
	status: string //'REQUEST' |
	userId: number
}
export interface UseJoinListType {
	response: Content[]
	status: number
	success: boolean
}

const getJoinListData = async (meetingId: number) => {
	const res = await JoinApi.getJoinList({ meetingId })
	return res.data
}

const useGetJoinListData = (meetingId: number) => {
	const { data, isLoading, refetch } = useQuery<UseJoinListType, boolean>(
		['useGetJoinListData', meetingId],
		() => getJoinListData(meetingId),
	)

	return { data, isLoading, refetch }
}

export default useGetJoinListData
