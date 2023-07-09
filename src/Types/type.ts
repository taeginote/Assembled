//children 있는 자식 type
export type childrenType = {
	children: React.ReactNode
}

//아이템 데이터 type
export type ItemDataType = {
	postId: number
	title: string
	category: string
	profile: {
		fileFullPath: string
		originalName: string
	}
	writer: string
	personnelNumber: string
	expectedPeriod: string
}

//onKey도 쓰이고 target도 쓰이는곳
export type EventTargetType = React.ChangeEvent<HTMLInputElement> &
	React.KeyboardEvent<HTMLInputElement>

//select Box
export type SelectBoxType = {
	name: string
	url: 'recent' | 'popular' | 'like'
}

//Pagination Type
//props type
export type PaginationType = {
	limit: number
	totalPage: number
	setPage: (page: number) => void
	scroll: number
}

export type PaginationDisabled = 'start' | 'end'

//Auth type
export type AuthContextType = {
	accessToken: string | null
	login: (token: string) => void
	logout: () => void
}

//리액트 훅 폼 Login type
export type LoginSubmitData = {
	LoginEmail?: string
	LoginPW?: string
}

//리액트 훅 폼 SignUp type
export type SignUpSubmitData = {
	SignUpEmail?: string
	SignUpName?: string
	SignUpNickName?: string
	SignUpPw?: string
	SignUpBirthday?: string
	SignUpPhone?: string
}
