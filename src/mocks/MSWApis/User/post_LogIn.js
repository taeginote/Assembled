import { rest } from 'msw'
import userData from '../../Data/UserData'

export const post_Login = [
	rest.post('/assemble/user/authentication', (req, res, ctx) => {
		const { data } = req.body
		const { email, password } = data

		const userdata = userData.find(
			el => el.email === email && el.password === password,
		)

		//로그인 실패
		if (userdata.length === 0)
			return res(
				ctx.status(401),
				ctx.json({ message: '로그인을 실패하였습니다.' }),
			)

		return res(ctx.status(200), ctx.json())
	}),
]
