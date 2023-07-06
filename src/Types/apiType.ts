import { AxiosResponse } from 'axios'

type PostData = {
	postId: number
}

type CommentData = {
	commentContents: string
	userId: number
	postId?: number
}

export type DetailApiType = {
	getDetail(params: PostData): Promise<AxiosResponse<PostData>>
	Comments(data: any): Promise<AxiosResponse<CommentData>>
}

type GetListData = {
	page?: number
	category?: 'study' | 'project'
	filter?: 'total' | 'like' | 'popular'
}
export type ListApiType = {
	getList(params: GetListData): Promise<AxiosResponse<GetListData>>
}
