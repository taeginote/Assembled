//msw type

//post_Login
type postLogInData = {
	email: string
	password: string
}

export type postLogInType = {
	data: postLogInData
}

//post_Register
type postRegisterData = {
	category: string
	contents: string
	expectedPeriod: '0' | '1' | '2' | '3' | '4' | '5' | '6'
	personnelNumber: 0 | 2 | 3 | 4 | 5 | 10
	title: string
	writer: string
}

export type postRegisterType = {
	data: postRegisterData
}

//post_Comments

export type postCommentsType = {
	data: { commentContents: string; postId: string }
}

export type Comments = {
	commentContents: string
	commentCreator: any
	userProfile: {
		fileFullPath: string
		originalName: string
	}
	commentCreatedDate: string
}

//get_Detail
export type ListDataItem = {
	postId: string
}
