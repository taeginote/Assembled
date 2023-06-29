import axiosInstance from './@core'

//디테일 관련 Apis
const DetailApi = {
	getDetail({ assembleId }) {
		return axiosInstance.get('/Detail', {
			params: { assembleId },
		})
	},
	Comments({ data }) {
		return axiosInstance.post('/Comments', { data })
	},
}

export default DetailApi
