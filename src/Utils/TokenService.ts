const TOKEN_KEY = 'access_token'

const TokenService = {
	getAccessToken() {
		return localStorage.getItem(TOKEN_KEY)
	},
	removeAccessToken() {
		localStorage.removeItem(TOKEN_KEY)
	},
	setAccessToken(token: string) {
		console.log(token)
		localStorage.setItem(TOKEN_KEY, token)
	},
}

export default TokenService
