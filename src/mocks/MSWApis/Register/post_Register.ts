import { rest } from 'msw'
import listData from '../../Data/ListData'
import CurrentTime from '../../../Utils/CurrentTime'
import { response } from '../../../Types/dataType'
import { postRegisterType } from '../../../Types/mswType'

export const post_Register = [
	rest.post('/register', (req, res, ctx) => {
		const { data } = req.body as postRegisterType
		console.log(data)
		const {
			categoryName,
			contents,
			expectedPeriod,
			personnelNumber,
			title,
			writerNickname,
		} = data

		const realData: response = {
			postId: Math.floor(Math.random() * 9999) + 1,
			title,
			contents,
			categoryName,
			writerNickname,
			writeDate: CurrentTime(),
			postStatus: '모집중',
			hits: '4',
			likes: '2',
			personnelNumber,
			expectedPeriod,
			profile: {
				fileFullPath:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiQdhWxfSe3uKwTyX4EK_JPrS7wppr6p6FA&usqp=CAU', // 예시) D://project/file
				originalName: '파일 이름',
			},
			commentCount: 0,
			comments: [],
		}

		listData.response.unshift(realData)
		return res(ctx.status(200), ctx.json(listData))
	}),
]
