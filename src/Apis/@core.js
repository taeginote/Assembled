import axios, { Axios } from 'axios'
import TokenService from '../Utils/TokenService'

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000',
	withCredentials: true,
	headers: {
		Authorization: `Bearer ${TokenService.getAccessToken()}`,
	},
})

export default axiosInstance
