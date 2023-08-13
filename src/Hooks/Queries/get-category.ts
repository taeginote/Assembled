import { useQuery } from '@tanstack/react-query'

import CategoryApi from '../../Apis/CategoryApi'

const getCategoryData = async () => {
	const res = await CategoryApi.getCategory()

	return res.data
}

type Category = {
	categoryId: number
	categoryName: string
}
interface UseCategoryType {
	response: Category[]
}

const useGetCategoryData = () => {
	//보류
	const { data, isLoading, refetch } = useQuery<any, boolean>(
		['useGetCategoryData'],
		() => getCategoryData(),
	)
	return { data, isLoading, refetch }
}

export default useGetCategoryData
