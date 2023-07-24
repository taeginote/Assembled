import { useQuery } from '@tanstack/react-query'

import CategoryApi from '../../Apis/CategoryApi'

const getCategoryData = async () => {
	const res = await CategoryApi.getCategory()

	return res.data
}

const useGetCategoryData = () => {
	//보류
	const { data, isLoading, refetch }: any = useQuery(
		['useGetCategoryData'],
		() => getCategoryData(),
	)
	return { data, isLoading, refetch }
}

export default useGetCategoryData
