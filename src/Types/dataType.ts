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

export type userDataType = {
	birthDate: string
	email: string
	name: string
	nickname: string
	password: string
	phoneNumber: string
}

export type CommentFormPropsType = {
	comments: Comment[]
	refetch: () => void
	postId?: number
	userImg?: string
}
