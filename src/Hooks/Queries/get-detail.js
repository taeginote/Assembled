import { useQuery } from '@tanstack/react-query'
import DetailApi from '../../Apis/DetailApi'

const getDetailData = async () => {
	const res = await DetailApi.getDetail()
	return res.data
}

const useGetDetailData = () => {
	const { data, isLoading, refetch } = useQuery(['detail'], () =>
		getDetailData(),
	)
	return { data, isLoading, refetch }
}

export default useGetDetailData
