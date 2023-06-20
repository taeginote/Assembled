import axiosInstance from './@core'

//디테일 관련 Apis
const DetailApi = {
	getDetail() {
		return axiosInstance.get('/Detail')
	},
	Comments({ data }) {
		return axiosInstance.post('/Comments', { data })
	},
}

export default DetailApi
