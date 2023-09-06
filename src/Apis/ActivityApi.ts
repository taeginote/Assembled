import { ActivityApiType } from '../Types/apiType'
import axiosInstance from './@core'

//리스트 관련 Apis
const PATH = '/assemble/activity'

const ActivityApi: ActivityApiType = {
	getActivity(page) {
		return axiosInstance.get(PATH + '/meeting', {
			page,
			size: 4,
		})
	},
}

export default ActivityApi
