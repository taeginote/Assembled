import { useQuery } from '@tanstack/react-query'
import ScheduleApi from '../../Apis/ScheduleApi'

interface getDetailScheduleDataType {
	response: {
		content: string
		date: string
		id: string
		title: string
		writeDate: string
		writerNickname: string
	}
}

const getDetailScheduleData = async (scheduleId: number) => {
	const res = await ScheduleApi.DetailSchedule(scheduleId)
	return res.data
}

const useGetDetailScheduleData = (scheduleId: number) => {
	const { data, isLoading, refetch } = useQuery<
		getDetailScheduleDataType,
		boolean
	>(['useGetDetailScheduleData'], () => getDetailScheduleData(scheduleId))

	return { data, isLoading, refetch }
}

export default useGetDetailScheduleData
