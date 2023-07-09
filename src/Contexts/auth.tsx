import { useContext, useState, createContext, useEffect } from 'react'
import TokenService from '../Utils/TokenService'
import { AuthContextType, childrenType } from '../Types/type'

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

	const login = (token: string) => {
		TokenService.setAccessToken(token)
		setAccessToken(token)
	}

	const logout = () => {
		TokenService.removeAccessToken()
		setAccessToken(null)
	}

	return (
		<AuthContext.Provider value={{ accessToken, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
