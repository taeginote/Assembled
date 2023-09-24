const SocialKakao = () => {
	//1번 이거 아래 두개는 백엔드한테 받을 예정이다. 그러면 1번 끝~
	const REST_API_KEY = '백엔드한테 달라하자1'
	const REDIRECT_URI = '백엔드한테 달라하자2'

	// oauth 요청 URL

	//카카오 로그인 구현 순서
	//1.일단 버튼을 누르면 로그인 창이 나온다
	//2.카카오에서 인가코드를 받아온다.
	//  백엔드에서 받은 REDIRECT_URI에 ?code?=이상한코드가한가득 이게 있는데 이게 카카오에서 주는 인가 코드이다. 이걸 백엔드한테 주면 된다.
	//3.인가코드는 주소의 쿼리스트링에 담여져서 받아온다. 그것을 백엔드한테 전달한다.
	//4.그러면 백엔드가 오리의 토큰을 받아서 로그인을 유지하고
	//5.토큰을 받아서 로그인을 유지할수있다.

	const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code
    `
	const handleLogin = () => {
		window.location.href = link
	}

	return (
		<button title="kakao-login-btn" type="button" onClick={handleLogin}>
			카카오 로그인
		</button>
	)
}
export default SocialKakao
