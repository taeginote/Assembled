import { UserApiType } from '../Types/apiType'
import axiosInstance from './@core'

//User 관련 Apis
const UserApi = {
	SignUp(data) {
		const { email, name, nickname, password, birthDate, phoneNumber } = data
		return axiosInstance.post(
			'/assemble/signup' +
				`?email=${email}&name=${name}&nickname=${nickname}&password=${password}&birthDate=${birthDate}&phoneNumber=${phoneNumber}`,
		)
	},
	Login(data) {
		console.log(data)
		return axiosInstance.post('/assemble/user/authentication', { data })
	},

	// 이메일 검증
	// 닉네임 검증
	getEmailValidation(email) {
		return axiosInstance.get('/assemble/email/validation', {
			params: { email },
		})
	},
	getNickNameValidation(nickname) {
		return axiosInstance.get('/assemble/nickname/validation', {
			params: { nickname },
		})
	},

	// SignUp(data) {
	// 	return axiosInstance.post('/assemble/user/signup', data, {
	// 		headers: {
	// 			'Content-Type': 'multipart/form-data',
	// 		},
	// 	})
	// },
	// Login(data) {
	// 	return axiosInstance.post('/assemble/authentication', { data })
	// },
}

export default UserApi
