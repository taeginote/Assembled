import { useQuery } from '@tanstack/react-query'
import ActivityApi from '../../Apis/ActivityApi'
import { UseListType } from './get-list'

const getActivityData = async (page: number) => {
	const res = await ActivityApi.getActivity(page)
	return res.data
}

const useGetActivityData = (page: number) => {
	const { data, isLoading, refetch } = useQuery<UseListType, boolean>(
		['useGetActivityData'],
		() => getActivityData(page),
	)

	return { data, isLoading, refetch }
}

export default useGetActivityData
