import { PostLikeApiType } from '../Types/apiType'
import axiosInstance from './@core'

//리스트 관련 Apis
const PostLikeApi: PostLikeApiType = {
	// getList({ pageNumber, searchBy, searchQuery }) {
	// 	return axiosInstance.get('/assemble/post', {
	// 		params: { pageNumber, searchBy, searchQuery },
	// 	})
	// },
	// DeletePost(postId) {
	// 	return axiosInstance.delete(`/assemble/post/${postId}`)
	// },
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
