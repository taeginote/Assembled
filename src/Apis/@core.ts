import axios from 'axios'
import UserApi from './UserApi'
import TokenService from '../Utils/TokenService'
import UserInfoService from '../Utils/UserInfoService'
import UserIdService from '../Utils/UserIdService'

interface resDataType {
	status: number
	data: {
		response: {
			accessToken: string
		}
	}
}

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	withCredentials: true,
})

axiosInstance.interceptors.request.use(
	(config: any) => {
		const access_token = TokenService.getAccessToken()
		if (access_token === null) return config
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
		if (error.response.status === 403) {
			TokenService.removeAccessToken()
			UserInfoService.removeUserInfo()
			UserIdService.removeUserId()
			window.location.reload()

			alert('인증토큰이 만료되었습니다\n다시 로그인 해주세요')
			return Promise.reject(error)
		}

		const originalRequest = error.config

		// AccessToken 재발급
		if (error.response.status === 401) {
			originalRequest._retry = true //재요청
			TokenService.setAccessToken('') //이걸로 length 0으로하고 header 제외
			const res: resDataType = await UserApi.getToken() //RefreshToken 재발급
			if (res.status === 200) {
				TokenService.setAccessToken(res?.data?.response?.accessToken) //성공하면 로컬스토리지 setToken
				return axiosInstance(originalRequest)
			} else {
				return axiosInstance(originalRequest)
			}
		}
		return Promise.reject(error)
	},
)

export default axiosInstance
