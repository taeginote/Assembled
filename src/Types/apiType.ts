import { AxiosResponse } from 'axios'
import { response } from './dataType'

//디테일 페이지 api type
type PostData = {
	postId: number
}

type CommentData = {
	commentContents: string
	userId: number
	postId?: number
}

export type DetailApiType = {
	getDetail(params: PostData): Promise<AxiosResponse<response>>
	Comments(data: any): Promise<AxiosResponse<CommentData>>
}

//리스트 페이지 api type
type GetListData = {
	page?: number
	category?: 'study' | 'project'
	filter?: 'total' | 'like' | 'popular'
}
export type ListApiType = {
	getList(params: GetListData): Promise<AxiosResponse<GetListData>>
}

//등록 페이지 api type
type PostRegisterData = {
	category: 'study' | 'project'
	contents: string
	expectedPeriod: '0' | '1' | '2' | '3' | '4' | '5' | '6'
	personnelNumber: 0 | 2 | 3 | 4 | 5 | 10
	title: string
	writer: string
}

export type RegisterApiType = {
	data: PostRegisterData
}
