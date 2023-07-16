import axios from 'axios'
import TokenService from '../Utils/TokenService'

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000',
	// baseURL:
	// 	'https://port-0-assemble-deploy-temp-20zynm2mlk476ngf.sel4.cloudtype.app',
	withCredentials: true,
	headers: {
		Authorization: `Bearer ${TokenService.getAccessToken()}`,
	},
})

export default axiosInstance
