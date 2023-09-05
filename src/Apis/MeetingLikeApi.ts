import { MeetingLikeApiType } from '../Types/apiType'
import axiosInstance from './@core'

const PATH = '/assemble/meeting/like'
//리스트 관련 Apis

const MeetingLikeApi: MeetingLikeApiType = {
	MeetingLike(data) {
		return axiosInstance.post(PATH, data)
	},
	CancelLike(data) {
		return axiosInstance.delete(PATH + '/' + data)
	},
}

export default MeetingLikeApi
