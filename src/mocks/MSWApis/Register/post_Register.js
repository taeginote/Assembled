import { rest } from 'msw'
import listData from '../../Data/ListData'

export const post_Register = [
	rest.post('/register', (req, res, ctx) => {
		const { data } = req.body

		const {
			category,
			contents,
			expectedPeriod,
			personnelNumber,
			title,
			writer,
		} = data

		const realData = {
			writer,
			category: category === 'study' ? '스터디' : '프로젝트',
			contents,
			expectedPeriod,
			personnelNumber,
			title,
		}

		listData.unshift(realData)
		return res(ctx.status(200), ctx.json())
	}),
]
