const TOKEN_KEY = 'userNickName'

const UserNickNameService = {
	getNickName() {
		return localStorage.getItem(TOKEN_KEY)
	},
	removeNickName() {
		localStorage.removeItem(TOKEN_KEY)
	},
	setNickName(token: string) {
		localStorage.setItem(TOKEN_KEY, token)
	},
}

export default UserNickNameService
