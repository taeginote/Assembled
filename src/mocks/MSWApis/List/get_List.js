import { rest } from 'msw'
import listData from '../../Data/ListData'

export const get_ListData = [
	rest.get(`/List`, (req, res, ctx) => {
		const category = req.url.searchParams.get('category')
		const filter = req.url.searchParams.get('filter')
		const page = req.url.searchParams.get('page') || 1

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
		if (category === 'study') {
			real_ListData = {
				success: true,
				status: 200,
				response: [...listData.response.filter(el => el.category === '스터디')],
			}
		}
		if (filter === 'popular') {
			real_ListData = {
				success: true,
				status: 200,
				response: [
					...listData.response.sort((a, b) => a.hits - b.hits).reverse(),
				],
			}
		}

		if (filter === 'like') {
			real_ListData = {
				success: true,
				status: 200,
				response: [
					...listData.response.sort((a, b) => a.likes - b.likes).reverse(),
				],
			}
		}

		function chunk(data, size) {
			let arr = []
			for (let i = 0; i < data.length; i += size) {
				arr.push({
					status: 200,
					success: true,
					response: data.slice(i, i + size),
				})
			}
			return arr
		}

		const real_ListData_Slice = chunk(real_ListData.response, 12)

		return res(ctx.status(200), ctx.json(real_ListData_Slice[page - 1]))
	}),
]
