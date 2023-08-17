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
import ChangeRegister from '../Pages/Register/ChangeRegister'
import UserSetting from '../Pages/MyPage/Pages/UserSetting'
import Likes from '../Pages/MyPage/Pages/Likes'
import Activity from '../Pages/MyPage/Pages/Activity'

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
						element: <ChangeRegister />,
					},
					{
						path: '/myPage',
						element: <Mypage />,
						children: [
							{
								path: '',
								element: <Activity />,
							},
							{
								path: 'meeting/wrote',
								element: <Wrote />,
							},
							{
								path: 'meeting/likes',
								element: <Likes />,
							},
							{
								path: 'comment',
								element: <Comment />,
							},
							{
								path: 'setting/withdrawal',
								element: <Withdrawal />,
							},
							{
								path: 'setting/userSetting',
								element: <UserSetting />,
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
