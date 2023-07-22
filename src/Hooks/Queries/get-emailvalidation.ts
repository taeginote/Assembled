import { useQuery } from '@tanstack/react-query'
import UserApi from '../../Apis/UserApi'

const getEmailValidation = async (email: string) => {
	const res = await UserApi.getEmailValidation({ email })
	return res.data
}

const useGetEmailValidation = (email: string) => {
	const { data, isLoading, refetch } = useQuery(
		['useGetDetailData', email],
		() => getEmailValidation(email),
	)
	return { data, isLoading, refetch }
}

export default useGetEmailValidation
