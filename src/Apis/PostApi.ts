import { PostApiType } from '../Types/apiType'
import axiosInstance from './@core'

//리스트 관련 Apis
const PATH = '/assemble/post'

const PostApi: PostApiType = {
	getList({ pageNumber, searchBy, searchQuery }) {
		return axiosInstance.get(PATH, {
			params: { pageNumber, searchBy, searchQuery },
		})
	},
	PostRegister(data) {
		const {
			categoryId,
			contents,
			expectedPeriod,
			personnelNumber,
			title,
			writer, //userId를 의미함
		} = data
		return axiosInstance.post(
			PATH +
				`?categoryId=${1}&contents=${contents}&expectedPeriod=${3}&personnelNumber=${3}&title=${title}&writer=${1}`,
		)
	},
	getDetail({ postId }) {
		return axiosInstance.get(`${PATH}/${postId}`)
	},
	DeletePost(postId) {
		return axiosInstance.delete(`${PATH}/${postId}`)
	},
}

export default PostApi
