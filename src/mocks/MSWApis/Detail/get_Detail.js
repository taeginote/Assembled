import { rest } from 'msw'
import listData from '../../Data/ListData'

export const get_DetailData = [
	rest.get('/Detail', (req, res, ctx) => {
		let assembleId = req.url.searchParadms.get('assembleId')
		let realDetailData = listData.filter(el => el.assembleId === assembleId)

		return res(ctx.status(200), ctx.json(...realDetailData))
	}),
]
