import { createBrowserRouter } from 'react-router-dom'
import Header from '../Components/Layout/Header/index'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		children: [
			// {
			// 	path: '/login',
			// 	element: < />,
			// },
		],
	},
])

export default router
