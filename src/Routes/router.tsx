import Register from '../Pages/Register/Register'
import Mypage from '../Pages/MyPage'
import Active from '../Pages/MyPage/Pages/Active'
import Edit from '../Pages/MyPage/Pages/Edit'
import Wrote from '../Pages/MyPage/Pages/Wrote'
import Comment from '../Pages/MyPage/Pages/Comment'
import Withdrawal from '../Pages/MyPage/Pages/Withdrawal'
import PrivateRoute from './private'
import Haeder from '../Components/Layout/Header'
import Error404 from '../Error/Error404'
import Detail from '../Pages/\bDetail/Detail'
import Login from '../Pages/Form/Login/Login'
import SignUpTest from '../Pages/Form/SignUp/SignUpTest'
import List from '../Pages/List'

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
				element: <SignUpTest />,
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
						path: '/myPage',
						element: <Mypage />,
						children: [
							{
								path: '',
								element: <Active />,
							},
							{
								path: '/myPage/edit',
								element: <Edit />,
							},
							{
								path: '/myPage/wrote',
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
