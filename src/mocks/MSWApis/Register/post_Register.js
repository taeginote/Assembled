import { rest } from 'msw'
import listData from '../../Data/ListData'

export const post_Register = [
	rest.post('/register', (req, res, ctx) => {
		const { data } = req.body
		listData.unshift(data)
		return res(ctx.status(200), ctx.json())
	}),
]
