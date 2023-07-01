import axiosInstance from './@core'

//리스트 관련 Apis
const ListApi = {
	getList({ category, filter }) {
		return axiosInstance.get('/List', {
			params: { category, filter },
		})
	},
}

export default ListApi
