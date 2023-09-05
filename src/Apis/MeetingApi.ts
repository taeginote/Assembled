import { MeetingApiType } from '../Types/apiType'
import axiosInstance from './@core'

//리스트 관련 Apis
const PATH = '/assemble/meeting'

const MeetingApi: MeetingApiType = {
	getList({ page, searchBy, searchQuery, sort, categoryId }) {
		return axiosInstance.get(PATH, {
			params: { page, searchBy, searchQuery, sort, categoryId },
		})
	},
	meetingRegister(data) {
		return axiosInstance.post(PATH, data)
	},
	putRegister(data) {
		return axiosInstance.put(PATH, data)
	},
	getDetail({ meetingId }) {
		return axiosInstance.get(`${PATH}/${meetingId}`)
	},
	DeleteMeeting(meetingId) {
		return axiosInstance.delete(`${PATH}/${meetingId}`)
	},
	getUserWrote({ meetingId, page }) {
		return axiosInstance.get(`${PATH}/user/${meetingId}`, {
			params: { page, size: 9 },
		})
	},
	getUserLike(page) {
		return axiosInstance.get(`${PATH}/like`, {
			params: { page, size: 9 },
		})
	},
}

export default MeetingApi
