import { rest } from 'msw'
import CurrentTime from '../../../Utils/CurrentTime'
import listData from '../../Data/ListData'
export const post_CommentsData = [
	rest.post('/Comments', (req, res, ctx) => {
		const { data } = req.body
		const realComments = {
			commentContents: data.comment,
			commentCreator: data.email,
			postId: data.postId,
			userImg: data.img,
			currentTime: CurrentTime(),
			img: 'https://i.namu.wiki/i/o81kFfad6uoV0sN0iGSqA3hEKyIniZUhP7VBq2dI3WeyOFalhAEa_lQ_SY0GEbC_oJ4qzLlKokalWFk6cx86vg.webp',
		}
		console.log(listData.map(el => el.assembleId === data.postId))
		// comments.unshift(newData)
		return res(ctx.status(200), ctx.json())
		//내용, email, post id
	}),
]
