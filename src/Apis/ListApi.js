import axiosInstance from './@core'

//리스트 관련 Apis
const ListApi = {
	getList() {
		return axiosInstance.get('/List')
	},
}

export default ListApi
