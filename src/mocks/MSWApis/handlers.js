import { get_DetailData } from './Detail/get_Detail'
import { post_CommentsData } from './Detail/post_Comments'
import { get_ListData } from './List/get_List'
import { post_Register } from './Register/post_Register'

export const handlers = [
	...get_DetailData,
	...post_CommentsData,
	...post_Register,
	...get_ListData,
]
