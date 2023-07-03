import axiosInstance from './@core'

//리스트 관련 Apis
const ListApi = {
	getList({ page, category, filter }) {
		return axiosInstance.get('/List', {
			params: { page, category, filter },
		})
	},
}

export default ListApi
