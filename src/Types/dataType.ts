//전체적인 list mock 데이터 통신 type
type Comment = {
	commentContents: string
	commentCreator: string
	commentCreatedDate: string
	userProfile: {
		fileFullPath: string
		originalName: string
	}
}
export type response = {
	postId: number
	title: string
	contents: string
	category: string
	writer: string
	writeDate: string
	postStatus: string
	hits: string
	likes: string
	personnelNumber: string
	expectedPeriod: string
	profile: {
		fileFullPath: string
		originalName: string
	}
	commentCount: number
	comments: Comment[]
}

export type listDataType = {
	success: boolean
	status: number
	response: response[]
}

//userDataType은 msw 목데이터 만들때 넣는 type
export type userDataType = {
	birthDate: string
	email: string
	name: string
	nickname: string
	password: string
	phoneNumber: string
}

//CommentForm 즉, 디테일 안에 댓글 작성 props type
export type CommentFormPropsType = {
	comments: Comment[]
	refetch: () => void
	postId?: number
	userImg?: string
}
