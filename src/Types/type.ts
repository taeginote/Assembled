//children 있는 자식 type
export type childrenType = {
	children: React.ReactNode
}

// 쓰이지 않는것으로 판단
// export type dataType = {
// 	postId: number
// 	title: string
// 	category: string
// 	profile: string
// 	writer: string
// 	personnelNumber: string
// 	expectedPeriod: string
// }

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

export type CommentDataType = {
	commentContents: string
	userId: number
	postId?: number | null
}

//select Box
export type SelectBoxType = {
	name: string
	url: 'recent' | 'popular' | 'like'
}
