import { useQuery } from '@tanstack/react-query'

import { Category } from '../../Pages/List/Components/CategoryNav/CategoryNav'
import JoinApi from '../../Apis/JoinApi'

export type Content = {
	joinRequestId: number
	message: string | null
	postId: number
	status: string
	userId: number
}
export interface UseJoinListType {
	response: {
		content: Content[]
		totalPages: number
	}
	status: number
	success: boolean
}

const getJoinListData = async (postId: number) => {
	const res = await JoinApi.getJoinList({ postId })
	return res.data
}

//수정
interface UseCategoryType {
	response: Category[]
}

const useGetJoinListData = (postId: number) => {
	const { data, isLoading, refetch } = useQuery<any, boolean>(
		['useGetJoinListData', postId],
		() => getJoinListData(postId),
	)

	return { data, isLoading, refetch }
}

export default useGetJoinListData
