import { useQuery } from '@tanstack/react-query'

import ActivityApi from '../../Apis/ActivityApi'
// import { Category } from '../../Pages/List/Components/CategoryNav/CategoryNav'

const getActivityData = async (page: number) => {
	const res = await ActivityApi.getActivity(page)
	return res.data
}

// interface UseCategoryType {
// 	response: Category[]
// }

const useGetActivityData = (page: number) => {
	const { data, isLoading, refetch } = useQuery<any, boolean>(
		['useGetActivityData'],
		() => getActivityData(page),
	)

	return { data, isLoading, refetch }
}

export default useGetActivityData
