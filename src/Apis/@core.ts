import axios from 'axios'
import UserApi from './UserApi'
import TokenService from '../Utils/TokenService'

const axiosInstance = axios.create({
	baseURL:
		'https://port-0-assemble-deploy-temp-20zynm2mlk476ngf.sel4.cloudtype.app',
	withCredentials: true,
	headers: {
		Authorization: `Bearer ${TokenService.getAccessToken()}`,
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

		if (error.response.status === 417 && !originalRequest._retry) {
			originalRequest._retry = true

			// const res = await UserApi.refreshToken()
			// TokenService.setAccessToken(res.data.token)
			return axiosInstance(originalRequest)
		}
		return Promise.reject(error)
	},
)

export default axiosInstance
