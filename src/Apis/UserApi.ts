import { UserApiType } from '../Types/apiType'
import axiosInstance from './@core'

//User 관련 Apis
const UserApi: UserApiType = {
	SignUp(data) {
		return axiosInstance.post('/assemble/user/signup', data, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
	Login(data) {
		return axiosInstance.post('/assemble/user/authentication', { data })
	},
}

export default UserApi
