import { UserApiType } from '../Types/apiType'
import axiosInstance from './@core'

//User 관련 Apis

const UserApi: UserApiType = {
	SignUp(data) {
		const {
			email,
			gender,
			name,
			nickname,
			password,
			birthDate,
			phoneNumber,
			profileImage,
		} = data
		return axiosInstance.post(
			'/assemble/signup' +
				`?email=${email}&gender=${gender}&name=${name}&nickname=${nickname}&password=${password}&birthDate=${birthDate}&phoneNumber=${phoneNumber}`,
			profileImage,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			},
		)
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
		return axiosInstance.post('/assemble/logout')
	},
	deletewithdrawal() {
		return axiosInstance.delete(`/assemble/user/withdrawal`)
	},
	getUserInfo(userId) {
		return axiosInstance.get(`/assemble/user/${userId}`, {
			params: { userId },
		})
	},
	PutUserInfo(data) {
		const { birthDate, name, nickname, phoneNumber } = data
		return axiosInstance.put(
			'/assemble/user' +
				`?birthDate=${birthDate}&name=${name}&nickname=${nickname}&phoneNumber=${phoneNumber}`,
		)
	},
	PutProfileImg(profileImage) {
		return axiosInstance.put('/assemble/user/profile', profileImage, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
	getFindEmail(data) {
		const { name, phoneNumber, birthDate } = data

		return axiosInstance.get('/assemble/user/email', {
			params: { name, phoneNumber, birthDate },
		})
	},
	postFindPassword(data) {
		return axiosInstance.post('/assemble/user/validation', data)
	},
	putChangePassword(data) {
		return axiosInstance.put('/assemble/user/password', data)
	},
}

export default UserApi
