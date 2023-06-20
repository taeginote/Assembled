function currentTime() {
	const now = new Date()

	//년 월 일
	let year = now.getFullYear()
	let month = now.getMonth() + 1
	let todayDate = now.getDate()

	//시간 분 초
	let hours = now.getHours()
	let minutes = now.getMinutes()
	let seconds = now.getSeconds()

	return (
		year +
		'-' +
		month +
		'-' +
		todayDate +
		' ' +
		hours +
		':' +
		minutes +
		':' +
		seconds
	)
}
export default currentTime
