import { JoinApiType } from '../Types/apiType'
import axiosInstance from './@core'

//리스트 관련 Apis
const PATH = '/assemble/join'

const JoinApi: JoinApiType = {
	postJoin(data) {
		return axiosInstance.post(PATH, data)
	},
	getJoinList({ postId }) {
		return axiosInstance.get(`${PATH}/${postId}`, {
			params: { postId },
		})
	},
	PutJoinStatus(data) {
		return axiosInstance.put(PATH, data)
	},
}

export default JoinApi
