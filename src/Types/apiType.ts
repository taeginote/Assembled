import { AxiosResponse } from 'axios'
import { response } from './dataType'
import {
	UseListType,
	categoryType,
	filterType,
} from '../Hooks/Queries/get-list'
import { Comments, UseDetailType } from '../Hooks/Queries/get-detail'

export interface PostData {
	postId?: number
}

//이건 댓글 API 아직 백엔드 없어서 보류
export interface CommentData {
	contents?: string
	postId?: number
}

export type CommentApiType = {
	postComment(data: CommentData): Promise<AxiosResponse<CommentData>>
	getUserComment(params: any): Promise<AxiosResponse<any>>
	deleteComment(params?: number): Promise<AxiosResponse<number>>
	putComment(data: any): Promise<AxiosResponse<any>>
}

export interface PostLike {
	postId?: number | null
}

export interface PostLikeApiType {
	PostLike(params: PostLike): Promise<AxiosResponse<PostLike>>
	CancelLike(params?: number): Promise<AxiosResponse<number | undefined>>
}

interface GetListData {
	page?: number
	searchBy?: string
	searchQuery?: string
	categoryId?: categoryType
	sort?: filterType
	response?: []
}
export interface PostRegisterData {
	categoryId: 1 | number
	contents?: string
	expectedPeriod?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | '제한 없음'
	personnelNumber?: 0 | 2 | 3 | 4 | 5 | 10 | '제한 없음'
	title?: string
}
export interface PatchRegisterData extends PostRegisterData {
	postStatus?: string
	postId?: number
}

export interface PostApiType {
	getList(params: GetListData): Promise<AxiosResponse<UseListType>>
	PostRegister(
		params: PostRegisterData,
	): Promise<AxiosResponse<PostRegisterData>>
	putRegister(
		params: PatchRegisterData,
	): Promise<AxiosResponse<PatchRegisterData>>
	getDetail(params: PostData): Promise<AxiosResponse<UseDetailType>>
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
	profileImage?: string[]
}

export interface LoginData {
	email?: string
	password?: string

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
	getUserInfo(data: string | null): Promise<AxiosResponse<any>>
	PutUserInfo(
		data: Omit<signUpData, 'password'>,
	): Promise<AxiosResponse<Omit<signUpData, 'password'>>>
}

export interface ApiError {
	response: {
		data: {
			error: {
				message: string
			}
		}
	}
}
