import { useQuery } from '@tanstack/react-query'

import MapApi from '../../Apis/MapAPI'

const getAccessTokenData = async () => {
	const res = await MapApi.getAccessToken()
	return res.data
}

const useGetAccessTokenData = () => {
	const { data, isLoading, refetch } = useQuery<any, boolean>(
		['useGetAccessTokenData'],
		() => getAccessTokenData(),
	)

	return { data, isLoading, refetch }
}

export default useGetAccessTokenData
