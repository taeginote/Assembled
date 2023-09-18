import { useQuery } from '@tanstack/react-query'

import MapApi from '../../Apis/MapAPI'
import { SearchAddressProps } from '../../Types/apiType'

export interface getSearchAddressList {
	full_addr: string
	cd: string
}
interface getSearchAddressDataType {
	result: getSearchAddressList[]
}

const getSearchAddressData = async (datas: SearchAddressProps) => {
	const res = await MapApi.getSearchAddress(datas)
	return res.data
}

const useGetSearchAddressData = (datas: SearchAddressProps) => {
	const { data, isLoading, refetch } = useQuery<
		getSearchAddressDataType,
		boolean
	>(
		['useGetSearchAddressData', datas],
		() => getSearchAddressData(datas),

		{
			enabled: datas?.accessToken !== undefined,
		},
	)

	return { data, isLoading, refetch }
}

export default useGetSearchAddressData
