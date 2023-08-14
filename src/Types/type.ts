import { UserInfoType } from '../Pages/Form/Login/Login'
import { DataType } from '../Pages/List/Components/SearchBar/SearchBar'

//children 있는 자식 type
export interface childrenType {
	children: React.ReactNode
}

//아이템 데이터 type
export interface ItemDataType {
	postId?: number
	title?: string
	categoryName?: string
	writerProfileImages?: {
		fileFullPath?: string
		originalName?: string
	}
	writerNickname?: string
	perssonelNumber?: string
	expectedPeriod?: string
	commentCount?: string
	likes?: number
	likeStatus?: boolean
}

//onKey도 쓰이고 target도 쓰이는곳
export type EventTargetType =
	| React.ChangeEvent<HTMLInputElement> & React.KeyboardEvent<HTMLInputElement>

export type TextareaEventTargetType =
	| React.ChangeEvent<HTMLTextAreaElement> &
			React.KeyboardEvent<HTMLTextAreaElement>

//select Box

//Pagination Type
//props type
export interface PaginationType {
	limit: number
	totalPage: number
	setPage: (page: number) => void
	scroll: number
}
type selectValType = {
	title: '제목' | '내용' | string //의문임 왜 string이 있어야할까?
	value: 'title' | 'contents' | string
}
export interface SearchType {
	setSelectVal: (props: DataType) => void
	selectVal: selectValType
	setSearchValue: (page: string) => void
	setPage: (page: number) => void
}

//Auth type
export interface AuthContextType {
	accessToken: string | null
	login: (token: string, id: string, userInfo: UserInfoType) => void
	logout: () => void
}

//리액트 훅 폼 Login type
export interface LoginSubmitData {
	LoginEmail?: string
	LoginPW?: string
}

//리액트 훅 폼 SignUp type
export interface SignUpSubmitData {
	SignUpEmail?: string
	SignUpName?: string
	SignUpNickName?: string
	SignUpPw?: string
	SignUpBirthday?: string
	SignUpPhone?: string
	profileImg?: string
}

//말풍선
export interface BallonType {
	text?: string
}
