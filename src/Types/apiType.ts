import { AxiosResponse } from 'axios'
import { categoryType, filterType } from '../Hooks/Queries/get-list'

export interface PostCommentProps {
	contents?: string
	postId?: number
}
interface GetUserCommentProps {
	userId: string | null
	page: number | null
}
export interface PutCommentProps {
	commentId: null | number
	contents: null | string
}

export type CommentApiType = {
	postComment(data: PostCommentProps): Promise<AxiosResponse>
	getUserComment(params: GetUserCommentProps): Promise<AxiosResponse>
	deleteComment(params?: number): Promise<AxiosResponse>
	putComment(data: PutCommentProps): Promise<AxiosResponse>
}

export interface PostLikeProps {
	postId?: number | null
}

export interface PostLikeApiType {
	PostLike(params: PostLikeProps): Promise<AxiosResponse>
	CancelLike(params?: number): Promise<AxiosResponse>
}

interface GetListProps {
	page?: number
	searchBy?: string
	searchQuery?: string
	categoryId?: categoryType
	sort?: filterType
}
export interface PostRegisterProps {
	categoryId: 1 | number
	contents?: string
	expectedPeriod?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | '제한 없음'
	personnelNumber?: 0 | 2 | 3 | 4 | 5 | 10 | '제한 없음'
	title?: string
}
export interface PatchRegisterData extends PostRegisterProps {
	postStatus?: string
	postId?: number
}

interface GetUserWroteProps {
	postId: string | null
	page: null | number
}

export interface PostApiType {
	getList(params: GetListProps): Promise<AxiosResponse>
	PostRegister(params: PostRegisterProps): Promise<AxiosResponse>
	putRegister(params: PatchRegisterData): Promise<AxiosResponse>
	getDetail(params: PostLikeProps): Promise<AxiosResponse>
	DeletePost(params?: number): Promise<AxiosResponse>
	getUserWrote(params: GetUserWroteProps): Promise<AxiosResponse>
	getUserLike(params: number): Promise<AxiosResponse>
}
export interface PutCategoryProps {
	categoryName: string
	id: number
}
export interface CategoryApiType {
	getCategory(): Promise<AxiosResponse>
	PutCategory(data: PutCategoryProps): Promise<AxiosResponse>
	DeleteCategory(id: number): Promise<AxiosResponse>
	PostCategory(data: Omit<PutCategoryProps, 'id'>): Promise<AxiosResponse>
}

//Join Api
export interface postJoinProps {
	joinRequestMessage: string
	postId: number
}
export interface getJoinListProps {
	postId: number
}

export interface JoinApiType {
	postJoin(data: postJoinProps): Promise<AxiosResponse>
	getJoinList(data: getJoinListProps): Promise<AxiosResponse>
}

//User api type

export interface signUpProps {
	email: string
	name: string
	nickname: string
	password: string
	birthDate: string
	phoneNumber: string
	profileImage?: FormData
}

export interface LoginData {
	email?: string
	password?: string
	// 보류
}

interface EmailValidation {
	email?: string
}
interface NicknameValidation {
	nickname?: string
}

export type UserApiType = {
	SignUp(data: signUpProps): Promise<AxiosResponse>
	Login(data: LoginData): Promise<AxiosResponse>
	getEmailValidation(data: EmailValidation): Promise<AxiosResponse>
	getNickNameValidation(data: NicknameValidation): Promise<AxiosResponse>
	getToken(): Promise<AxiosResponse>
	postLogout(): Promise<AxiosResponse>
	deletewithdrawal(): Promise<AxiosResponse>
	getUserInfo(data: string | null): Promise<AxiosResponse>
	PutUserInfo(
		data: Omit<signUpProps, 'password' | 'email'>,
	): Promise<AxiosResponse>
}
