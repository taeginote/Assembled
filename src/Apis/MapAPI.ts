import axios from 'axios'
import { MapApiType } from '../Types/apiType'

//리스트 관련 Apis
const PATH = 'https://sgisapi.kostat.go.kr/OpenAPI3'

const MapApi: MapApiType = {
	getAccessToken() {
		return axios.get(`${PATH}/auth/authentication.json`, {
			params: {
				consumer_key: process.env.REACT_APP_MAP_KEY,
				consumer_secret: process.env.REACT_APP_MAP_SECRET,
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
