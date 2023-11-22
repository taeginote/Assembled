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

const getMonthScheduleListData = async (
	yearAndMonth: string,
	meetingId: number,
) => {
	const res = await ScheduleApi.MonthScheduleList(yearAndMonth, meetingId)
	return res.data
}

const useGetMonthScheduleListData = (
	yearAndMonth: string,
	meetingId: number,
) => {
	const { data, isLoading, refetch } = useQuery<
		getMonthScheduleListDataType,
		boolean
	>(['useGetMonthScheduleListData', yearAndMonth], () =>
		getMonthScheduleListData(yearAndMonth, meetingId),
	)

	return { data, isLoading, refetch }
}

export default useGetMonthScheduleListData
