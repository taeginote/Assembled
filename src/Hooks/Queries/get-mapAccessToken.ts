import { useQuery } from '@tanstack/react-query'

import MapApi from '../../Apis/MapAPI'

interface getAccessTokenDataType {
	result: {
		accessToken?: string
	}
}

const getAccessTokenData = async () => {
	const res = await MapApi.getAccessToken()
	return res.data
}

const useGetAccessTokenData = () => {
	const { data, isLoading, refetch } = useQuery<
		getAccessTokenDataType,
		boolean
	>(['useGetAccessTokenData'], () => getAccessTokenData())

	return { data, isLoading, refetch }
}

export default useGetAccessTokenData
