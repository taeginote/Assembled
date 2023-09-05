import { JoinApiType } from '../Types/apiType'
import axiosInstance from './@core'

//리스트 관련 Apis
const PATH = '/assemble/join'

const JoinApi: JoinApiType = {
	meetingJoin(data) {
		return axiosInstance.post(PATH, data)
	},
	getJoinList({ meetingId }) {
		return axiosInstance.get(`${PATH}/${meetingId}`, {
			params: { meetingId },
		})
	},
	PutJoinStatus(data) {
		return axiosInstance.put(PATH, data)
	},
}

export default JoinApi
