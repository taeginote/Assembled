import { createBrowserRouter } from 'react-router-dom'
import Header from '../Components/Layout/Header/index'
import List from '../Pages/List'
import SignUp from '../Pages/Form/SignUp/SignUp'
import Login from '../Pages/Form/Login/Login'
import Detail from '../Pages/\bDetail/Detail'
import Register from '../Pages/Register/Register'
import Error404 from '../Error/Error404'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
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
				path: '/detail/:idx',
				element: <Detail />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
	{
		path: '/*',
		element: <Error404 />,
	},
])

export default router
