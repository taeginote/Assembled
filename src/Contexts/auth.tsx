import { useContext, useState, createContext, useEffect } from 'react'
import TokenService from '../Utils/TokenService'
import { AuthContextType, childrenType } from '../Types/type'
import UserIdService from '../Utils/UserIdService'

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

	const login = (token: string, id: string) => {
		TokenService.setAccessToken(token)
		UserIdService.setUserId(id)
		setAccessToken(token)
	}

	const logout = () => {
		TokenService.removeAccessToken()
		UserIdService.removeUserId()
		setAccessToken(null)
	}

	return (
		<AuthContext.Provider value={{ accessToken, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
