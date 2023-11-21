import { ScheduleApiType } from '../Types/apiType'
import axiosInstance from './@core'

//리스트 관련 Apis
const PATH = '/assemble/schedule'

export interface PostScheduleType {
	content: string
	date: string
	title: string
}

const ScheduleApi: ScheduleApiType = {
	MonthScheduleList(yearAndMonth) {
		return axiosInstance.get(PATH, {
			params: {
				yearAndMonth,
			},
		})
	},
	PostSchedule(content: PostScheduleType) {
		return axiosInstance.post(PATH, content)
	},
	DetailSchedule(scheduleId: number) {
		return axiosInstance.get(PATH + '/' + scheduleId)
	},
	putSchedule(content: PostScheduleType) {
		return axiosInstance.put(PATH, content)
	},
	deleteSchedule(scheduleId: number) {
		return axiosInstance.delete(PATH + '/' + scheduleId)
	},
}

export default ScheduleApi
