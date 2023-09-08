import { useQuery } from '@tanstack/react-query'

import CategoryApi from '../../Apis/CategoryApi'
import { Category } from '../../Pages/List/Components/CategoryNav/CategoryNav'
import { useNavigate } from 'react-router-dom'

const getAdminCategoryData = async () => {
	const res = await CategoryApi.getAdminCategory()

	return res.data
}

interface UseCategoryType {
	response: Category[]
}

const useGetAdminCategoryData = () => {
	const navigate = useNavigate()
	const { data, isLoading, refetch } = useQuery<UseCategoryType, boolean>(
		['useGetAdminCategoryData'],
		() => getAdminCategoryData(),
		{
			onError: (error: any) => {
				if (error.response.data.status === 405) {
					navigate('/')
					alert('관리자 권한이 없습니다.')
				}
			},
		},
	)

	return { data, isLoading, refetch }
}

export default useGetAdminCategoryData
