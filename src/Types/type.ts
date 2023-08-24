import { DataType } from '../Pages/List/Components/SearchBar/SearchBar'

//children 있는 자식 type
export interface childrenType {
	children: React.ReactNode
}

interface IdxSignature {
	[key: string]: string
}

//아이템 데이터 type
export interface ItemDataType {
	contents: string
	hits: number
	postProfileImages?: IdxSignature | []
	writerId: number
	postId?: number
	title?: string
	categoryName?: string
	writerProfileImages?: IdxSignature
	writerNickname?: string
	personnelNumber?: string | number
	expectedPeriod?: number
	commentCount?: number
	likes?: number
	likeStatus?: boolean
	postStatus: 'PROGRESS' | 'COMPLETED'
}

//onKey도 쓰이고 target도 쓰이는곳
export type EventTargetType =
	| React.ChangeEvent<HTMLInputElement> & React.KeyboardEvent<HTMLInputElement>

export type TextareaEventTargetType =
	| React.ChangeEvent<HTMLTextAreaElement> &
			React.KeyboardEvent<HTMLTextAreaElement>

//props type
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
export interface UserInfoSubmitData {
	SignUpName?: string
	EditNickName?: string
	SignUpBirthday?: string
	SignUpPhone?: string
	profileImg?: string
}

export type OnClickType = (event: React.MouseEvent<HTMLButtonElement>) => void
