import { rest } from 'msw'
import userData from '../../Data/UserData'
import { postLogInType } from '../../../Types/mswType'

export const post_Login = [
	rest.post('/assemble/user/authentication', (req, res, ctx) => {
		const { data } = req.body as postLogInType
		const { email, password } = data

		const userdata = userData.find(
			el => el.email === email && el.password === password,
		)

		//로그인 실패
		if (!userdata)
			return res(
				ctx.status(401),
				ctx.json({ message: '로그인을 실패하였습니다.' }),
			)

		const successData = {
			success: true,
			status: 200,
			token: 'token',
			response: {
				userId: '1',
				email: 'taegi@naver.com',
				phoneNumber: '01011112222',
				role: 'USER',
				nickname: 'taek	',
				name: 'teak',
				profile: {
					fileFullPath:
						'https://img.suto.co.kr/data/file/free/562736188_c37uwHEJ_FB_IMG_1463665367004.jpg',
					originalName: '파일 이름',
				},
			},
		}
		return res(ctx.status(200), ctx.json(successData))
	}),
]
