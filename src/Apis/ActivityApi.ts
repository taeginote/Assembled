import { ActivityApiType } from '../Types/apiType'
import axiosInstance from './@core'

//리스트 관련 Apis
const PATH = '/assemble/activity'

const ActivityApi: ActivityApiType = {
	getActivity(page) {
		return axiosInstance.get(PATH + '/meeting', {
			params: {
				page,
				size: 4,
			},
		})
	},
	getActivityUser(meetingId) {
		return axiosInstance.get(PATH + `/user/${meetingId}`)
	},
}

export default ActivityApi
