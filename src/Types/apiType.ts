import { AxiosResponse } from 'axios'
import { response } from './dataType'
import { categoryType, filterType } from '../Hooks/Queries/get-list'

export interface PostData {
	postId?: number
}

//이건 댓글 API 아직 백엔드 없어서 보류
export interface CommentData {
	contents?: string
	userId?: string | null
	postId?: number
}

export type CommentApiType = {
	postComment(data: CommentData): Promise<AxiosResponse<CommentData>>
	getUserComment(params: any): Promise<AxiosResponse<any>>
	deleteComment(params?: number): Promise<AxiosResponse<number>>
	patchComment(data: any): Promise<AxiosResponse<any>>
}

//디테일 페이지 post 댓글
// export interface postComment {
// 	data: {
// 		commentContents: string
// 		userId: number
// 		postId?: number | null
// 	}
// }

export interface PostLike {
	postId?: number | undefined | null | string
}

export interface PostLikeApiType {
	PostLike(params: PostLike): Promise<AxiosResponse<PostLike>>
	CancelLike(params: any): Promise<AxiosResponse<any>>
}

interface GetListData {
	page?: number
	searchBy?: any
	searchQuery?: string
	categoryId?: categoryType
	sort?: filterType
	response?: []
}
export interface PostRegisterData {
	categoryId?: 1 | null | string
	contents?: string
	expectedPeriod?: 0 | 1 | 2 | 3 | 4 | 5 | 6
	personnelNumber?: 0 | 2 | 3 | 4 | 5 | 10
	title?: string
	writer?: null | string
}

export interface PostApiType {
	getList(params: GetListData): Promise<AxiosResponse<GetListData>>
	PostRegister(
		params: PostRegisterData,
	): Promise<AxiosResponse<PostRegisterData>>
	getDetail(params: PostData): Promise<AxiosResponse<response>>
	DeletePost(
		params: number | undefined,
	): Promise<AxiosResponse<number | undefined>>
	getUserWrote(params: any): Promise<AxiosResponse<any>>
	//여기는 모임 수정 (아직 구현 X)
}
export interface CategoryApiType {
	getCategory(): Promise<AxiosResponse>
}

//User api type
export interface signUpData {
	email?: string
	name?: string
	nickname?: string
	password?: string
	birthDate?: string
	phoneNumber?: string
	profileImage?: any
}
export interface LoginData {
	email?: string
	password?: string
	token?: string
	// 보류
	response?: any
}
interface EmailValidation {
	email?: string
}
interface NicknameValidation {
	nickname?: string
}
interface resType1 {
	error: {
		message: 'string'
		status: number
	}
	response: {
		accessToken: 'string'
	}
	status: number
	success: true
}

export type UserApiType = {
	SignUp(data: signUpData): Promise<AxiosResponse<signUpData>>
	Login(data: LoginData): Promise<AxiosResponse<LoginData>>
	getEmailValidation(
		data: EmailValidation,
	): Promise<AxiosResponse<EmailValidation>>
	getNickNameValidation(
		data: NicknameValidation,
	): Promise<AxiosResponse<NicknameValidation>>
	getToken(): Promise<AxiosResponse>
	postLogout(): Promise<AxiosResponse>
	deletewithdrawal(): Promise<AxiosResponse>
}
