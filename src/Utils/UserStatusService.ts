const TOKEN_KEY = 'userStatus'

const UserStatus = {
	userNickName: TOKEN_KEY,
}

const UserStatusService = {
	getUserStatus() {
		return localStorage.getItem(TOKEN_KEY)
	},
	removeUserStatus() {
		localStorage.removeItem(TOKEN_KEY)
	},
	setUserStatus(userStatus: string) {
		localStorage.setItem(TOKEN_KEY, userStatus)
	},
}

export default UserStatusService
