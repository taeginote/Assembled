export type childrenType = {
	children: React.ReactNode
}

export type dataType = {
	postId: number
	title: string
	category: string
	profile: string
	writer: string
	personnelNumber: string
	expectedPeriod: string
}

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

export type EventTargetType = React.ChangeEvent<HTMLInputElement> &
	React.KeyboardEvent<HTMLInputElement>

export type CommentDataType = {
	commentContents: string
	userId: number
	postId?: number | null
}
