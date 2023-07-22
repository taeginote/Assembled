import { PostLikeApiType } from '../Types/apiType'
import axiosInstance from './@core'

//리스트 관련 Apis
const PostLikeApi: PostLikeApiType = {
	PostLike(data) {
		console.log(data)
		return axiosInstance.post('/assemble/post/like', data)
	},
	CancelLike(data) {
		console.log(data)
		return axiosInstance.delete('/assemble/post/like', data)
	},
}

export default PostLikeApi
