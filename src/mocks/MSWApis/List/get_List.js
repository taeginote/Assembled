import { rest } from 'msw'
import listData from '../../Data/ListData'

export const get_ListData = [
	rest.get(`/List`, (req, res, ctx) => {
		let category = req.url.searchParams.get('category')
		let real_ListData
		listData.response.map(el => {
			if (el.expectedPeriod === '0') {
				el.expectedPeriod = '제한없음'
			}
		})
		if (category === null || 'total') {
			real_ListData = listData
		}
		if (category === 'project') {
			real_ListData = {
				success: true,
				status: 200,
				response: [
					...listData.response.filter(el => el.category === '프로젝트'),
				],
			}
		}
		if (category === 'project') {
			real_ListData = {
				success: true,
				status: 200,
				response: [...listData.response.filter(el => el.category === '스터디')],
			}
		}

		return res(ctx.status(200), ctx.json(real_ListData))
	}),
]
