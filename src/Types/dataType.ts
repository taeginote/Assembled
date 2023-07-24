interface Comment {
	commentContents: string
	commentCreator: string
	commentCreatedDate: string
	userProfile: {
		fileFullPath: string
		originalName: string
	}
}

export interface response {
	postId: number
	title: string
	contents: string
	categoryName: 'study' | 'project' | string
	writerNickname: string
	writeDate: string
	postStatus: string
	hits: string
	likes: string
	personnelNumber: 0 | 2 | 3 | 4 | 5 | 10 | number
	expectedPeriod: '0' | '1' | '2' | '3' | '4' | '5' | '6' | string
	profile: {
		fileFullPath: string
		originalName: string
	}
	commentCount: number
	comments: Comment[]
}

//CommentForm 즉, 디테일 안에 댓글 작성 props type
export interface CommentFormPropsType {
	comments: Comment[]
	refetch: () => void
	postId?: number
	userImg?: string
}
