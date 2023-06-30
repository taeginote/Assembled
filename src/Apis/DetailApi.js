import axiosInstance from './@core'

//디테일 관련 Apis
const DetailApi = {
	getDetail({ postId }) {
		return axiosInstance.get('/Detail', {
			params: { postId },
		})
	},
	Comments({ data }) {
		return axiosInstance.post('/Comments', { data })
	},
}

export default DetailApi
