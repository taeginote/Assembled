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

//디테일 페이지 post 댓글
export type postComment = {
	data: {
		commentContents: string
		userId: number
		postId?: number | null
	}
}

//리스트 페이지 api type
type GetListData = {
	page?: number
	category?: 'study' | 'project'
	filter?: 'total' | 'like' | 'popular'
	response?: []
}

export type ListApiType = {
	getList(params: GetListData): Promise<AxiosResponse<GetListData>>
}

//등록 페이지 api type
export type PostRegisterData = {
	Category: 'study' | 'project' | string
	Contents: string
	Period: '0' | '1' | '2' | '3' | '4' | '5' | '6' | string
	TeamMember: 0 | 2 | 3 | 4 | 5 | 10 | number
	Title: string
	writer?: string
}
export type PostRegister = {
	category: 'study' | 'project' | string
	contents: string
	expectedPeriod: '0' | '1' | '2' | '3' | '4' | '5' | '6' | string
	personnelNumber: 0 | 2 | 3 | 4 | 5 | 10 | number
	title: string
	writer: string
}
export type MutateRegisterData = {
	data: PostRegisterData
}
export type MutateRegisterDataTest = {
	data: MutateRegisterData
}
export type RegisterApiType = {
	data: PostRegisterData
}

//User api type
export type signUpData = {
	email: string
	name: string
	nickname: string
	password: string
	birthDate: string
	phoneNumber: string
}
export type LoginData = {
	email?: string
	password?: string
	token?: string
}

export type UserApiType = {
	SignUp(data: signUpData): Promise<AxiosResponse<signUpData>>
	Login(data: LoginData): Promise<AxiosResponse<LoginData>>
}
