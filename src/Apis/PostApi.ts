import { PostApiType } from '../Types/apiType'
import axiosInstance from './@core'

//리스트 관련 Apis
const PATH = '/assemble/post'

const PostApi: PostApiType = {
	getList({ page, searchBy, searchQuery, sort, categoryId }) {
		return axiosInstance.get(PATH, {
			params: { page, searchBy, searchQuery, sort, categoryId },
		})
	},
	PostRegister(data) {
		return axiosInstance.post(PATH, data)
	},
	putRegister(data) {
		return axiosInstance.put(PATH, data)
	},
	getDetail({ postId }) {
		return axiosInstance.get(`${PATH}/${postId}`)
	},
	DeletePost(postId) {
		return axiosInstance.delete(`${PATH}/${postId}`)
	},
	getUserWrote({ postId, page }) {
		return axiosInstance.get(`${PATH}/user/${postId}`, {
			params: { page, size: 9 },
		})
	},
}

export default PostApi
