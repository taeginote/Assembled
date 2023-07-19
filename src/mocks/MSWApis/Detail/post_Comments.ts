import { rest } from 'msw'
import CurrentTime from '../../../Utils/CurrentTime'
import listData from '../../Data/ListData'
import { Comments, postCommentsType } from '../../../Types/mswType'

export const post_CommentsData = [
	rest.post('/Comments', (req, res, ctx) => {
		const { data } = req.body as postCommentsType
		console.log(data)
		let commentCreator = listData.response.map(el => {
			if (el.postId == Number(data.postId)) {
				return el.writerNickname
			}
		})

		const realComments: Comments = {
			commentContents: data.commentContents,
			commentCreator,
			userProfile: {
				fileFullPath:
					'https://i.namu.wiki/i/o81kFfad6uoV0sN0iGSqA3hEKyIniZUhP7VBq2dI3WeyOFalhAEa_lQ_SY0GEbC_oJ4qzLlKokalWFk6cx86vg.webp',
				originalName: '파일 이름',
			},
			commentCreatedDate: CurrentTime(),
		}
		listData.response.map(el => {
			if (el.postId == Number(data.postId)) {
				el.comments.unshift(realComments)
			}
		})

		return res(ctx.status(200), ctx.json(realComments))
	}),
]
