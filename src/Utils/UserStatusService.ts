const TOKEN_KEY = 'userStatus'

const UserStatusService = {
	getUserStatus() {
		return localStorage.getItem(TOKEN_KEY)
	},
	removeUserStatus() {
		localStorage.removeItem(TOKEN_KEY)
	},
	setUserStatus(userStatus: string) {
		localStorage.setItem(TOKEN_KEY, JSON.stringify(userStatus))
	},
}

export default UserStatusService
