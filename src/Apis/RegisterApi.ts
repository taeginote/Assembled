import { RegisterApiType } from '../Types/apiType'
import axiosInstance from './@core'

//등록 관련 Apis
const RegisterApi = {
	Register(data: RegisterApiType) {
		console.log(data)
		return axiosInstance.post('/register', data)
	},
}

export default RegisterApi
