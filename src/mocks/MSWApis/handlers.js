import { get_DetailData } from './Detail/get_Detail'
import { post_CommentsData } from './Detail/post_Comments'
import { post_Register } from './Register/post_Comments'

export const handlers = [
	...get_DetailData,
	...post_CommentsData,
	...post_Register,
]
