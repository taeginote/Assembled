import axiosInstance from './@core'

//리스트 관련 Apis
const ListApi = {
	getList({ category }) {
		return axiosInstance.get('/List', {
			params: { category },
		})
	},
}

export default ListApi
