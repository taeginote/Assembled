import { CommentApiType } from '../Types/apiType'
import axiosInstance from './@core'

//리스트 관련 Apis
const PATH = '/assemble/comment'

const CommentApi: CommentApiType = {
	postComment(data) {
		return axiosInstance.post(PATH, data)
	},
	getUserComment({ userId, page }) {
		return axiosInstance.get(`${PATH}/user/${userId}`, {
			params: { page, size: 4 },
		})
	},
	deleteComment(commentId) {
		return axiosInstance.delete(`${PATH}/${commentId}`)
	},
	putComment(data) {
		return axiosInstance.put(PATH, data)
	},
}

export default CommentApi
