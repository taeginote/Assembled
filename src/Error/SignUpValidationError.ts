import { ValidationMsg } from '../Pages/Form/SignUp/SignUp'

function SignUpValidationError(
	type: string,
	setState: any,
	response: boolean | 400,
) {
	// true면 중복
	// false면 중복 아닌거
	if (type === 'SignUpEmail') {
		if (response === true)
			return setState((prev: ValidationMsg) => ({
				...prev,
				email: { status: 'error', message: '중복된 이메일입니다.' },
			}))

		if (response === false)
			return setState((prev: ValidationMsg) => ({
				...prev,
				email: { status: 'success', message: '사용 가능한 이메일입니다.' },
			}))
		if (response === 400)
			return setState((prev: ValidationMsg) => ({
				...prev,
				email: { status: 'error', message: '이메일 형식이 아니에요' },
			}))
	}
	if (type === 'SignUpNickName') {
		if (response === true)
			return setState((prev: ValidationMsg) => ({
				...prev,
				nickname: { status: 'error', message: '중복된 닉네임입니다.' },
			}))

		if (response === false)
			return setState((prev: ValidationMsg) => ({
				...prev,
				nickname: { status: 'success', message: '사용 가능한 닉네임입니다.' },
			}))
	}
}
export default SignUpValidationError
