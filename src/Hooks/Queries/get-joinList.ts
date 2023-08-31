import { useQuery } from '@tanstack/react-query'

import JoinApi from '../../Apis/JoinApi'

export type Content = {
	createdDate: string
	joinRequestId: number
	message: null | string
	nickname: string
	postId: number
	status: string //'REQUEST' |
	userId: number
}
export interface UseJoinListType {
	response: Content[]
	status: number
	success: boolean
}

const getJoinListData = async (postId: number) => {
	const res = await JoinApi.getJoinList({ postId })
	return res.data
}

const useGetJoinListData = (postId: number) => {
	const { data, isLoading, refetch } = useQuery<UseJoinListType, boolean>(
		['useGetJoinListData', postId],
		() => getJoinListData(postId),
	)

	return { data, isLoading, refetch }
}

export default useGetJoinListData
