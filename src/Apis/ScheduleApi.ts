import { ScheduleApiType } from '../Types/apiType'
import axiosInstance from './@core'

//리스트 관련 Apis
const PATH = '/assemble/schedule'

const ScheduleApi: ScheduleApiType = {
	MonthScheduleList(yearAndMonth) {
		return axiosInstance.get(PATH, {
			params: {
				yearAndMonth,
			},
		})
	},
	PostSchedule(meetingId) {
		return axiosInstance.get(PATH + `/user/${meetingId}`)
	},
}

export default ScheduleApi
