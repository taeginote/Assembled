import { useContext, useState, createContext, useEffect } from 'react'
import TokenService from '../Utils/TokenService'
import { childrenType } from '../Types/type'
import UserIdService from '../Utils/UserIdService'
import UserInfoService from '../Utils/UserStatusService'
import UserNickNameService from '../Utils/UserNickNameService'

interface AuthContextType {
	accessToken: string | null
	login: (token: string, id: string, role: string, nickname: string) => void
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

	const login = (token: string, id: string, role: string, nickname: string) => {
		TokenService.setAccessToken(token)
		UserIdService.setUserId(id)
		UserInfoService.setUserStatus(role)
		UserNickNameService.setNickName(nickname)
		setAccessToken(token)
	}

	const logout = () => {
		TokenService.removeAccessToken()
		UserIdService.removeUserId()
		UserInfoService.removeUserStatus()
		UserNickNameService.removeNickName()
		setAccessToken(null)
	}

	return (
		<AuthContext.Provider value={{ accessToken, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
