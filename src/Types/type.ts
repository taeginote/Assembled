//children 있는 자식 type
export interface childrenType {
	children: React.ReactNode
}

//아이템 데이터 type
export interface ItemDataType {
	postId?: number
	title?: string
	categoryName?: string
	profile?: {
		fileFullPath?: string
		originalName?: string
	}
	writerNickname?: string
	perssonelNumber?: string
	expectedPeriod?: string
	commentCount?: string
	likes?: number
}

//onKey도 쓰이고 target도 쓰이는곳
export type EventTargetType =
	| React.ChangeEvent<HTMLInputElement> & React.KeyboardEvent<HTMLInputElement>

//select Box

//Pagination Type
//props type
export interface PaginationType {
	limit: number
	totalPage: number
	setPage: (page: number) => void
	scroll: number
}

export type PaginationDisabled = 'start' | 'end'

//Auth type
export interface AuthContextType {
	accessToken: string | null
	login: (token: string) => void
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
}

//말풍선
export interface BallonType {
	text?: string
}
