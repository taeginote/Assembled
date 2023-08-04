import axios from 'axios'
import UserApi from './UserApi'
import TokenService from '../Utils/TokenService'
import UserIdService from '../Utils/UserIdService'

console.log(TokenService.getAccessToken())
const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	withCredentials: true,
	// headers: {
	// 	Authorization:
	// 		TokenService.getAccessToken() &&
	// 		`Bearer ${TokenService.getAccessToken()}`,
	// },

	// headers: {
	// 	Authorization:
	// 		TokenService.getAccessToken() &&
	// 		TokenService.getAccessToken()?.length !== 0 &&
	// 		`Bearer ${TokenService.getAccessToken()}`,
	// },
})

axiosInstance.interceptors.request.use(
	(config: any) => {
		const access_token = TokenService.getAccessToken()
		console.log(access_token)
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

/*
- Axios interceptor와 Refresh Token
interceptor은 api요청에서 then이나 catch로 처리되기 전에 응답을 가로챌 수 있도록 하는것이다.
일단 우리는 토큰 만료는 401에러로 진행하였음 어세스 토큰이 해당시간이 지나면 401에러를 준다. 
토큰 탈취 문제를 피하고자 엑세스토큰의 유효기간은 짧게 설정해두고, 리프레시토큰을 통해 엑세스 토큰을 재발급 받는것이다. 
근데 401에러가 뜬다고 사용하고있는 유저한테 에러를 보여주거나 혹은 재로그인을 시도하는것은 불편하다. 
그래서 interceptor를 사용하여 유저가 보지 못하게 중간에서 가로채 리프레시 토큰으로 새 액세스토큰을 발급받아 진행중이던 요청을 완료할 것입니다.
- api를 보낼때 가로채는거 => axios.interceptors.request
- api 응답을 받을때 가로채는거 => axios.interceptor.response
*/

//응답이 올때 사용하는것이므로 use를 추가로 작성해 활용한다.

axiosInstance.interceptors.response.use(
	response => {
		return response
	},
	async error => {
		TokenService.setAccessToken('')
		TokenService.removeAccessToken()
		UserIdService.removeUserId()
		console.log(error.response.status)
		if (error.message === 'Network Error') {
			return Promise.reject(error)
		}

		// const originalRequest = error.config

		// 	if (error.response.status === 403) {
		// 		//아직 로그아웃이 없음
		// 		// await UserApi.logout()
		// 		TokenService.removeAccessToken()
		// 	}
		if (error.response.status === 401) {
			// originalRequest._retry = true
			console.log('dd')
			const res: any = await UserApi.getToken()
			console.log(res)
			if (res.status === 200) {
				// TokenService.setAccessToken(res?.response?.accessToken)
			}

			// return console.log(res)
			// // 		// if (res.status === 200) {
			// TokenService.setAccessToken(res?.response?.accessToken)
			// // 		return axiosInstance(originalRequest)
			// // 		// }
		}

		return Promise.reject(error)
	},
)

export default axiosInstance
