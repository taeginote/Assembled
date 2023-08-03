function ProfileImgReturn(path?: string) {
	if (path === undefined) return 'assets/img/person.png'
	if (path !== undefined) return path
}
export default ProfileImgReturn
