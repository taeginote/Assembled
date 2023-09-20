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
import Admin from '../Pages/Admin/admin'
import AdminCategory from '../Pages/Admin/Pages/AdminCategory'
import JoinRequest from '../Pages/MyPage/Pages/JoinRequest'
import MeetingActivity from '../Pages/Activity'
import ChattingPage from '../Pages/Activity/Components/ChattingPage'
import DatePage from '../Pages/Activity/Components/DatePage/DatePage'

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
						path: '/register/:meetingId',
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
								path: 'meeting/join',
								element: <JoinRequest />,
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
					{
						path: '/activity',
						element: <MeetingActivity />,
						children: [
							{
								path: '',
								element: <ChattingPage />,
							},
							{
								path: 'date',
								element: <DatePage />,
							},
						],
					},
				],
			},
		],
	},
	{
		path: '/admin',
		element: <Admin />,
		children: [
			{
				path: '',
				element: <AdminCategory />,
			},
		],
	},
	{
		path: '/*',
		element: <Error404 />,
	},
]

export default router
