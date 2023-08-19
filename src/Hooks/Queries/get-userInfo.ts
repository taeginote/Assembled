import { useQuery } from '@tanstack/react-query'
import UserApi from '../../Apis/UserApi'

interface UseUserInfoType {
	response: {
		email: string
		name: string
		nickname: string
		phoneNumber: string
		profile: any
		role: string
		userId: string
		birthDate: string
	}
	status: number
	success: boolean
}

const getUserInfoData = async (userId: string | null) => {
	const res = await UserApi.getUserInfo(userId)
	return res.data
}

const useGetUserInfoData = (userId: string | null) => {
	//보류
	const { data, isLoading, refetch } = useQuery<UseUserInfoType, boolean>(
		['useGetUserInfoData', userId],
		() => getUserInfoData(userId),
	)

	return { data, isLoading, refetch }
}

export default useGetUserInfoData
