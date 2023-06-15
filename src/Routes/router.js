import { createBrowserRouter } from 'react-router-dom'
import Header from '../Components/Layout/Header/index'
import List from '../Pages/List'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		children: [
			{
				path: '/',
				element: <List />,
			},
		],
	},
])

export default router
