import { useQuery } from '@tanstack/react-query'
import ScheduleApi from '../../Apis/ScheduleApi'
import { useNavigate } from 'react-router-dom'

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
	const navigate = useNavigate()
	const { data, isLoading, refetch } = useQuery<
		getMonthScheduleListDataType,
		boolean
	>(
		['useGetMonthScheduleListData', yearAndMonth],
		() => getMonthScheduleListData(yearAndMonth, meetingId),
		{
			onError: (error: any) => {
				console.log(error)

				navigate('/오류가났습니다')
			},
		},
	)

	return { data, isLoading, refetch }
}

export default useGetMonthScheduleListData
