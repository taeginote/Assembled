const TOKEN_KEY = 'userId'

const UserIdService = {
	getUserId() {
		return localStorage.getItem(TOKEN_KEY)
	},
	removeUserId() {
		localStorage.removeItem(TOKEN_KEY)
	},
	setUserId(id: string) {
		localStorage.setItem(TOKEN_KEY, id)
	},
}

export default UserIdService
