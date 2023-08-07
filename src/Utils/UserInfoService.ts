const TOKEN_KEY = 'userInfo'

const UserInfoService = {
	getUserInfo() {
		const userInfoString = localStorage.getItem(TOKEN_KEY)
		return userInfoString ? JSON.parse(userInfoString) : null
	},
	removeUserInfo() {
		localStorage.removeItem(TOKEN_KEY)
	},
	setUserInfo(userInfo: any) {
		localStorage.setItem(TOKEN_KEY, JSON.stringify(userInfo))
	},
}

export default UserInfoService
