import { useQuery } from '@tanstack/react-query'
import PostApi from '../../Apis/PostApi'

const getWroteData = async (postId: string | null, page: null | number) => {
	const res = await PostApi.getUserWrote({ postId, page })

	return res.data
}

const useGetWroteData = (postId: string | null, page: null | number) => {
	//보류
	const { data, isLoading, refetch } = useQuery<any, boolean>(
		['useGetWroteData', page],
		() => getWroteData(postId, page),
	)
	return { data, isLoading, refetch }
}

export default useGetWroteData
