import { MeetingLikeApiType } from '../Types/apiType'
import axiosInstance from './@core'

const PATH = '/assemble/meeting/like'
//리스트 관련 Apis

const MeetingLikeApi: MeetingLikeApiType = {
	MeetingLike(data) {
		return axiosInstance.post(PATH, data)
	},
	CancelLike(meetingId) {
		return axiosInstance.delete(PATH + '/' + meetingId)
	},
}

export default MeetingLikeApi
