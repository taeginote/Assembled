import { CommentApiType, PostApiType } from '../Types/apiType'
import axiosInstance from './@core'

//리스트 관련 Apis
const PATH = '/assemble/comment'

const CommentApi: CommentApiType = {
	postComment(data) {
		console.log(data)
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
	patchComment(data) {
		const { commentId, contents } = data

		return axiosInstance.patch(
			PATH + `?commentId=${commentId}&contents=${contents}`,
		)
	},
}

export default CommentApi
