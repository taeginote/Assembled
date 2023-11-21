import { useQuery } from '@tanstack/react-query'
import ScheduleApi from '../../Apis/ScheduleApi'

interface getMonthScheduleListDataType {
	response: {
		schedules: {
			day: number
			schedulesOfMonth: {
				id: number
				title: string
				writerNickname: string
				writeDate: string
				day: number
				date: string
			}[]
		}[]
	}
}

const getMonthScheduleListData = async (yearAndMonth: string) => {
	const res = await ScheduleApi.MonthScheduleList(yearAndMonth)
	return res.data
}

const useGetMonthScheduleListData = (yearAndMonth: string) => {
	const { data, isLoading, refetch } = useQuery<
		getMonthScheduleListDataType,
		boolean
	>(['useGetMonthScheduleListData', yearAndMonth], () =>
		getMonthScheduleListData(yearAndMonth),
	)

	return { data, isLoading, refetch }
}

export default useGetMonthScheduleListData
