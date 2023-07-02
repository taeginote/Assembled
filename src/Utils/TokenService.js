const TOKEN_KEY = 'access_token'

const TokenService = {
	getAccessToken() {
		return localStorage.getItem(TOKEN_KEY)
	},
	removeAccessToken() {
		localStorage.removeItem(TOKEN_KEY)
	},
	setAccessToken(token) {
		localStorage.setItem(TOKEN_KEY, token)
		console.log(token)
	},
}

export default TokenService
