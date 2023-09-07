import { AxiosResponse } from 'axios'
import { categoryType, filterType } from '../Hooks/Queries/get-list'

export interface MeetingCommentProps {
	contents?: string
	meetingId?: number
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
	meetingComment(data: MeetingCommentProps): Promise<AxiosResponse>
	getUserComment(params: GetUserCommentProps): Promise<AxiosResponse>
	deleteComment(params?: number): Promise<AxiosResponse>
	putComment(data: PutCommentProps): Promise<AxiosResponse>
}

export interface MeetingLikeProps {
	meetingId?: number | null
}

export interface MeetingLikeApiType {
	MeetingLike(params: MeetingLikeProps): Promise<AxiosResponse>
	CancelLike(params?: number): Promise<AxiosResponse>
}

interface GetListProps {
	page?: number
	searchBy?: string
	searchQuery?: string
	categoryId?: categoryType
	sort?: filterType
}
export interface MeetingRegisterProps {
	categoryId: 1 | number
	detailAddress?: string
	lotNumberAddress?: string
	roadNameAddress?: string
	zipCode?: number
	description?: string
	name?: string
}
export interface PatchRegisterData extends MeetingRegisterProps {
	meetingStatus?: string
	meetingId?: number
}

interface GetUserWroteProps {
	meetingId: string | null
	page: null | number
}

export interface MeetingApiType {
	getList(params: GetListProps): Promise<AxiosResponse>
	MeetingRegister(params: MeetingRegisterProps): Promise<AxiosResponse>
	putRegister(params: PatchRegisterData): Promise<AxiosResponse>
	getDetail(params: MeetingLikeProps): Promise<AxiosResponse>
	DeleteMeeting(params?: number): Promise<AxiosResponse>
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
	MeetingCategory(data: Omit<PutCategoryProps, 'id'>): Promise<AxiosResponse>
}

//Join Api
export interface meetingJoinProps {
	joinRequestMessage: string
	meetingId: number
}
export interface getJoinListProps {
	meetingId: number
}
export interface putJoinStatusProps {
	joinRequestId: number
	message: string | null
	status: 'APPROVAL' | 'REJECT' | 'BLOCK'
}

export interface JoinApiType {
	meetingJoin(data: meetingJoinProps): Promise<AxiosResponse>
	getJoinList(data: getJoinListProps): Promise<AxiosResponse>
	putJoinStatus(data: putJoinStatusProps): Promise<AxiosResponse>
	putmeetingJoinCancel(props: number): Promise<AxiosResponse>
	getMyJoinRequestList(props: number): Promise<AxiosResponse>
}

//User api type

export interface signUpProps {
	email: string
	gender: 'MAN' | 'WOMAN'
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
		data: Omit<signUpProps, 'password' | 'email' | 'gender' | 'profileImage'>,
	): Promise<AxiosResponse>
	PutProfileImg(data: Pick<signUpProps, 'profileImage'>): Promise<AxiosResponse>
}

export type ActivityApiType = {
	getActivity(page: number): Promise<AxiosResponse>
}
