import axios from 'axios'
import UserApi from './UserApi'
import TokenService from '../Utils/TokenService'

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	withCredentials: true,
	// headers: {
	// 	Authorization:
	// 		TokenService.getAccessToken() &&
	// 		`Bearer ${TokenService.getAccessToken()}`,
	// },
	headers: {
		Authorization:
			TokenService.getAccessToken() &&
			`Bearer ${TokenService.getAccessToken()}`,
	},
})

axiosInstance.interceptors.request.use(
	config => {
		const access_token = TokenService.getAccessToken()
		if (access_token) {
			config.headers['Authorization'] = `Bearer ${access_token}`
		}
		return config
	},

	error => {
		return Promise.reject(error)
	},
)

axiosInstance.interceptors.response.use(
	response => {
		return response
	},
	async error => {
		if (error.message === 'Network Error') {
			return Promise.reject(error)
		}

		const originalRequest = error.config

		if (error.response.status === 403) {
			//아직 로그아웃이 없음
			// await UserApi.logout()
			TokenService.removeAccessToken()
		}

		if (error.response.status === 401) {
			TokenService.removeAccessToken()
			// originalRequest._retry = true
			//보류 로직 처리후 타입 지정
			const res: any = await UserApi.getToken()
			console.log(res)
			if (res.status === 200) {
				TokenService.setAccessToken(res?.response?.accessToken)
				return axiosInstance(originalRequest)
			}
		}
		return Promise.reject(error)
	},
)

export default axiosInstance
