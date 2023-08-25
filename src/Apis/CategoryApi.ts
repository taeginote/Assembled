import { CategoryApiType } from '../Types/apiType'
import axiosInstance from './@core'

//리스트 관련 Apis
const PATH = '/assemble/category'

const CategoryApi: CategoryApiType = {
	getCategory() {
		return axiosInstance.get(PATH)
	},
	PutCategory(data) {
		return axiosInstance.put(PATH, data)
	},
	DeleteCategory(id) {
		return axiosInstance.delete(`${PATH}/${id}`)
	},
}

export default CategoryApi
