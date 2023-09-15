import { useQuery } from '@tanstack/react-query'

import MapApi from '../../Apis/MapAPI'
import { SearchAddressProps } from '../../Types/apiType'

const getSearchAddressData = async (datas: SearchAddressProps) => {
	const res = await MapApi.getSearchAddress(datas)
	return res.data
}

const useGetSearchAddressData = (datas: SearchAddressProps) => {
	console.log('useQuery 실행')
	const { data, isLoading, refetch } = useQuery<any, boolean>(
		['useGetSearchAddressData'],
		() => getSearchAddressData(datas),

		{
			enabled: datas?.accessToken !== undefined,
		},
	)

	return { data, isLoading, refetch }
}

export default useGetSearchAddressData
