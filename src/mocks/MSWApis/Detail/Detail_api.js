import { rest } from 'msw'
import detailData from '../../Data/Detaildata'

export const DetailData = [
	rest.get('/detail', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(detailData))
	}),
]
