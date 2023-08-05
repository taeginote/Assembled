import Register from '../Pages/Register/Register'
import Mypage from '../Pages/MyPage'

import Wrote from '../Pages/MyPage/Pages/Wrote'
import Comment from '../Pages/MyPage/Pages/Comment'
import Withdrawal from '../Pages/MyPage/Pages/Withdrawal'
import PrivateRoute from './private'
import Haeder from '../Components/Layout/Header'
import Error404 from '../Error/Error404'
import Detail from '../Pages/Detail/Detail'
import Login from '../Pages/Form/Login/Login'
import List from '../Pages/List'
import SignUp from '../Pages/Form/SignUp/SignUp'

const router = [
	{
		path: '/',
		element: <Haeder />,
		children: [
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/signup',
				element: <SignUp />,
			},
			{
				path: '/',
				element: <List />,
			},
			{
				path: '/Detail',
				element: <Detail />,
			},
			{
				element: <PrivateRoute />,
				children: [
					{
						path: '/register',
						element: <Register />,
					},
					{
						path: '/register/:postId',
						element: <Register />,
					},
					{
						path: '/myPage',
						element: <Mypage />,
						children: [
							{
								path: '/myPage',
								element: <Wrote />,
							},
							{
								path: '/myPage/comment',
								element: <Comment />,
							},
							{
								path: '/myPage/withdrawal',
								element: <Withdrawal />,
							},
						],
					},
				],
			},
		],
	},
	{
		path: '/*',
		element: <Error404 />,
	},
]

export default router
