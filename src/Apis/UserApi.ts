import { UserApiType } from '../Types/apiType'
import axiosInstance from './@core'

//User 관련 Apis

const UserApi: UserApiType = {
	SignUp(data) {
		const {
			email,
			name,
			nickname,
			password,
			birthDate,
			phoneNumber,
			profileImage,
		} = data

		return axiosInstance.post(
			'/assemble/signup' +
				`?email=${email}&name=${name}&nickname=${nickname}&password=${password}&birthDate=${birthDate}&phoneNumber=${phoneNumber}`,
			profileImage,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			},
		)
		// profileImage,
		// {
		// 	headers: {
		// 		'Content-Type': 'multipart/form-data',
		// 	},
		// }
	},
	Login(data) {
		const { email, password } = data
		return axiosInstance.post('/assemble/authentication', {
			email,
			password,
		})
	},
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
	getToken() {
		return axiosInstance.post('/assemble/auth/token')
	},
	postLogout() {
		return axiosInstance.post('/assemble/')
	},
	deletewithdrawal() {
		return axiosInstance.delete(`/assemble/user/withdrawal`)
	},
}

export default UserApi
