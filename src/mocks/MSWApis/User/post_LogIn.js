import { rest } from 'msw'
import userData from '../../Data/UserData'

export const post_Login = [
	rest.post('/assemble/user/authentication', (req, res, ctx) => {
		const { data } = req.body
		const { email, password } = data

		const userdata = userData.filter(
			el => el.email === email && el.password === password,
		)

		if (userdata.length === 0)
			return res(
				ctx.status(401),
				ctx.json({ message: '가입되지 않은 회원입니다.' }),
			)

		return res(ctx.status(200), ctx.json())
	}),
]
