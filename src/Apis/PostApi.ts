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
		const datas: any = {
			categoryId: 1,
			contents: 'ㅇㄴㅁㅇㄴ',
			expectedPeriod: 0,
			personnelNumber: 0,
			title: 'ㅇㄴㅁㅇㅁㄴ',
			writer: 1, //userId를 의미함
		}
		return axiosInstance.post(PATH, data)
	},
	getDetail({ postId }) {
		return axiosInstance.get(`${PATH}/${postId}`)
	},
	DeletePost(postId) {
		return axiosInstance.delete(`${PATH}/${postId}`)
	},
	getUserWrote({ postId }) {
		return axiosInstance.get(`${PATH}/user/${postId}`)
	},
}

export default PostApi
