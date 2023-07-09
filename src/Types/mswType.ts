//msw type

//post_Login
type postLogInData = {
	email: string
	password: string
}

export type postLogInType = {
	data: postLogInData
}

//get_Detail
export type ListDataItem = {
	postId: string
}
