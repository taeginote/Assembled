import TokenService from '../Utils/TokenService'
import NotificationModal from '../Components/Modal/NotificationModal'
import { Outlet } from 'react-router-dom'

const PrivateRoute = () => {
	const access_token = TokenService.getAccessToken()
	console.log(access_token)
	return access_token ? (
		<Outlet />
	) : (
		<NotificationModal text={'회원가입 후 이용해주세요'} url={'/login'} />
	)
}

export default PrivateRoute
