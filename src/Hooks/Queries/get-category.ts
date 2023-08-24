import { useQuery } from '@tanstack/react-query'

import CategoryApi from '../../Apis/CategoryApi'
import { Category } from '../../Pages/List/Components/CategoryNav/CategoryNav'

const getCategoryData = async () => {
	const res = await CategoryApi.getCategory()

	return res.data
}

interface UseCategoryType {
	response: Category[]
}

const useGetCategoryData = () => {
	const { data, isLoading, refetch } = useQuery<UseCategoryType, boolean>(
		['useGetCategoryData'],
		() => getCategoryData(),
	)

	return { data, isLoading, refetch }
}

export default useGetCategoryData
