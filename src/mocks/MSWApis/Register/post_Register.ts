import { rest } from 'msw'
import listData from '../../Data/ListData'
import CurrentTime from '../../../Utils/CurrentTime'
import { postRegisterType } from '../../../Types/mswType'
import { Comments } from '../../../Hooks/Queries/get-detail'

interface response {
	postId: number
	title: string
	contents: string
	categoryName: 'study' | 'project' | string
	writerNickname: string
	writeDate: string
	meetingStatus: string
	hits: string
	likes: string
	personnelNumber: 0 | 2 | 3 | 4 | 5 | 10 | number
	expectedPeriod: '0' | '1' | '2' | '3' | '4' | '5' | '6' | string
	profile: {
		fileFullPath: string
		originalName: string
	}
	commentCount: number
	comments: Comments[]
}
export const post_Register = [
	rest.post('/register', (req, res, ctx) => {
		const { data } = req.body as postRegisterType

		const {
			categoryName,
			contents,
			personnelNumber,
			expectedPeriod,
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
			meetingStatus: '모집중',
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
