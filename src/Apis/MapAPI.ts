import axios from 'axios'
import { MapApiType } from '../Types/apiType'

//리스트 관련 Apis
const PATH = 'https://sgisapi.kostat.go.kr/OpenAPI3'

const MapApi: MapApiType = {
	getAccessToken() {
		return axios.get(`${PATH}/auth/authentication.json`, {
			params: {
				consumer_key: '33e5cb9d36b840a6a7e5',
				consumer_secret: 'c51d734855884b70b795',
			},
		})
	},
	getSearchAddress({ accessToken, cd }) {
		return axios.get(`${PATH}/addr/stage.json`, {
			params: {
				accessToken,
				cd,
			},
		})
	},
}

export default MapApi
