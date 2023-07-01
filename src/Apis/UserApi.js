import axiosInstance from './@core'

//User 관련 Apis
const UserApi = {
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
