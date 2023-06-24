import axiosInstance from './@core'

//디테일 관련 Apis
const RegisterApi = {
	Register({ data }) {
		return axiosInstance.post('/register', { data })
	},
}

export default RegisterApi
