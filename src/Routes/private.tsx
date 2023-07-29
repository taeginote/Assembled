import { Outlet } from 'react-router-dom'
import TokenService from '../Utils/TokenService'
import NotificationModal from '../Components/Modal/NotificationModal'

const PrivateRoute = () => {
	const access_token = TokenService.getAccessToken()

	return access_token ? (
		<Outlet />
	) : (
		<NotificationModal text={'회원가입 후 이용해주세요'} url={'/login'} />
	)
}

export default PrivateRoute
