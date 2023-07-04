import { rest } from 'msw'
import userData from '../../Data/UserData'

export const post_SignUp = [
	rest.post('/assemble/user/signup', (req, res, ctx) => {
		userData.push({
			email: 'taegi@naver.com',
			name: '김태기',
			nickname: 'taek',
			password: 'ab315601!',
			birthDate: '19990504',
			phoneNumber: '01090251453',
		})

		return res(ctx.status(200), ctx.json())
	}),
]
