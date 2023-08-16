function ProfileImgReturn(filePath?: string | undefined) {
	console.log(filePath)
	if (filePath === undefined) return 'assets/img/person.png'
	if (filePath !== undefined)
		return process.env.REACT_APP_BACKEND_URL + '/assemble' + filePath
}
export default ProfileImgReturn
