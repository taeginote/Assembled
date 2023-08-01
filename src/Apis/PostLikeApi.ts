import { PostLikeApiType } from '../Types/apiType'
import axiosInstance from './@core'

const PATH = '/assemble/post/like'
//리스트 관련 Apis

const PostLikeApi: PostLikeApiType = {
	PostLike(data) {
		return axiosInstance.post(PATH, data)
	},
	CancelLike(data) {
		return axiosInstance.delete(PATH, data)
	},
}

export default PostLikeApi
