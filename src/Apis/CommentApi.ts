import { CommentApiType, PostApiType } from '../Types/apiType'
import axiosInstance from './@core'

//리스트 관련 Apis
const PATH = '/assemble/comment'

const CommentApi: CommentApiType = {
	postComment(data) {
		return axiosInstance.post(PATH, data)
	},
}

export default CommentApi
