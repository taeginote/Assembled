import { useContext, useState, createContext, useEffect } from 'react'
import TokenService from '../Utils/TokenService'
import { childrenType } from '../Types/type'
import UserIdService from '../Utils/UserIdService'
import UserInfoService from '../Utils/UserInfoService'
import { UserInfoType } from '../Pages/Form/Login/Login'

interface AuthContextType {
	accessToken: string | null
	login: (token: string, id: string, userInfo: UserInfoType) => void
	logout: () => void
}

const AuthContext = createContext<AuthContextType>({
	accessToken: null,
	login: () => {},
	logout: () => {},
})
export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }: childrenType) {
	const [accessToken, setAccessToken] = useState<string | null>(null)

	useEffect(() => {
		const token = TokenService.getAccessToken()
		if (!token) return
		setAccessToken(token)
	}, [])

	const login = (token: string, id: string, userInfo: UserInfoType) => {
		TokenService.setAccessToken(token)
		UserIdService.setUserId(id)
		UserInfoService.setUserInfo(userInfo)
		setAccessToken(token)
	}

	const logout = () => {
		TokenService.removeAccessToken()
		UserIdService.removeUserId()
		UserInfoService.removeUserInfo()
		setAccessToken(null)
	}

	return (
		<AuthContext.Provider value={{ accessToken, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
