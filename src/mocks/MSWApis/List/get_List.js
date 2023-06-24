import { rest } from 'msw'
import listData from '../../Data/ListData'

export const get_ListData = [
	rest.get('/List', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(listData))
	}),
]
