import { useContext, useState, createContext, useEffect } from 'react'
import TokenService from '../Utils/TokenService'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }) {
	const [accessToken, setAccessToken] = useState(null)

	useEffect(() => {
		const token = TokenService.getAccessToken()
		if (!token) return
		setAccessToken(token)
	}, [])

	const login = token => {
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
