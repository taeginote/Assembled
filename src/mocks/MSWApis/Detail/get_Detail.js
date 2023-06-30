import { rest } from 'msw'
import listData from '../../Data/ListData'

export const get_DetailData = [
	rest.get('/Detail', (req, res, ctx) => {
		let postId = req.url.searchParams.get('postId')

		let realDetailData = listData.response.filter(el => el.postId == postId)

		return res(ctx.status(200), ctx.json(...realDetailData))
	}),
]
