const TOKEN_KEY = 'userInfo'

const UserInfoService = {
	getUserInfo() {
		return localStorage.getItem(TOKEN_KEY)
	},
	removeUserInfo() {
		localStorage.removeItem(TOKEN_KEY)
	},
	setUserInfo(userInfo: any) {
		localStorage.setItem(TOKEN_KEY, JSON.stringify(userInfo))
	},
}

export default UserInfoService
