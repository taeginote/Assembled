import { AxiosResponse } from 'axios'
import { response } from './dataType'

export interface PostData {
	postId?: number
}

//이건 댓글 API 아직 백엔드 없어서 보류
// interface CommentData {
// 	commentContents: string
// 	userId: number
// 	postId?: number
// }

// export type DetailApiType = {
// 	Comments(data: any): Promise<AxiosResponse<CommentData>>
// }

//디테일 페이지 post 댓글
export interface postComment {
	data: {
		commentContents: string
		userId: number
		postId?: number | null
	}
}

export interface PostLike {
	postId?: number
	userId?: number
}
export interface PostLikeApiType {
	PostLike(params: PostLike): Promise<AxiosResponse<PostLike>>
	CancelLike(params: any): Promise<AxiosResponse<any>>
}

interface GetListData {
	pageNumber?: number
	searchBy?: string
	searchQuery?: string
	// category?: 'study' | 'project'
	// filter?: 'total' | 'like' | 'popular'
	response?: []
}
export interface PostRegisterData {
	categoryId?: 'study' | 'project' | string
	contents?: string
	expectedPeriod?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | string
	personnelNumber?: 0 | 2 | 3 | 4 | 5 | 10 | number
	title?: string
	writer?: string
}

export interface PostApiType {
	getList(params: GetListData): Promise<AxiosResponse<GetListData>>
	PostRegister(
		params: PostRegisterData,
	): Promise<AxiosResponse<PostRegisterData>>
	getDetail(params: PostData): Promise<AxiosResponse<response>>
	DeletePost(params: PostData): Promise<AxiosResponse<PostData>>
	//여기는 모임 수정 (아직 구현 X)
}

//User api type
export interface signUpData {
	email?: string
	name?: string
	nickname?: string
	password?: string
	birthDate?: string
	phoneNumber?: string
	profileImg?: string
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

export type UserApiType = {
	SignUp(data: signUpData): Promise<AxiosResponse<signUpData>>
	Login(data: LoginData): Promise<AxiosResponse<LoginData>>
	getEmailValidation(
		data: EmailValidation,
	): Promise<AxiosResponse<EmailValidation>>
	getNickNameValidation(
		data: NicknameValidation,
	): Promise<AxiosResponse<NicknameValidation>>
}
