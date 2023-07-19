import { ListApiType } from '../Types/apiType'
import axiosInstance from './@core'

//리스트 관련 Apis
const ListApi: ListApiType = {
	getList({ pageNumber, searchBy, searchQuery }) {
		console.log(typeof pageNumber)
		return axiosInstance.get('/assemble/post', {
			params: { pageNumber, searchBy, searchQuery },
		})
	},
}

export default ListApi
