import { rest } from 'msw'
import detailData from '../../Data/Detaildata'

export const CommentsData = [
	rest.post('/Comments', (req, res, ctx) => {
		const { data } = req.body

		const newData = {
			commentContents: data.comment,
			commentCreatedDate: data.currentTime,
			commentCreator: data.user,
			userImg: data.img,
		}

		detailData.comments.unshift(newData)
		return res(ctx.status(200), ctx.json())
	}),
]
