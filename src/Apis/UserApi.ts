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
			profileImg,
		} = data
		console.log(profileImg)
		return axiosInstance.post(
			'/assemble/signup' +
				`?email=${email}&name=${name}&nickname=${nickname}&password=${password}&birthDate=${birthDate}&phoneNumber=${phoneNumber}`,
		)
		// profileImg,
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
		console.log(email)
		return axiosInstance.get('/assemble/email/validation', {
			params: { email },
		})
	},
	getNickNameValidation(nickname) {
		console.log(nickname)
		return axiosInstance.get('/assemble/nickname/validation', {
			params: { nickname },
		})
	},
}

export default UserApi
