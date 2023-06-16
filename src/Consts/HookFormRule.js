const SignUpEmail = {
	required: {
		value: true,
		message: '이메일을 입력해주세요',
	},
	pattern: {
		value:
			/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
		message: '이메일 형식에 맞게 입력해주세요',
	},
}
const SignUpName = {
	required: {
		value: true,
		message: '이름을 입력해주세요',
	},
	minLength: {
		value: 2,
		message: '2자 이상 입력해주세요',
	},
	maxLength: {
		value: 20,
		message: '20자 이하로 입력해주세요',
	},
}
const SignUpNickName = {
	required: {
		value: true,
		message: '닉네임을 입력해주세요',
	},
	minLength: {
		value: 2,
		message: '2자 이상 입력해주세요',
	},
	maxLength: {
		value: 20,
		message: '20자 이하로 입력해주세요',
	},
}
const SignUpPw = {
	required: {
		value: true,
		message: '비밀번호를 입력해주세요',
	},
	minLength: {
		value: 8,
		message: '8자 이상 입력해주세요',
	},
	maxLength: {
		value: 20,
		message: '20자 이하로 입력해주세요',
	},
	pattern: {
		value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
		message: '영문자, 숫자, 특수문자를 포함해서 입력해주세요',
	},
}

const SignUpBirthday = {
	required: {
		value: true,
		message: '생년월일을 입력해주세요',
	},
	pattern: {
		value: /^[0-9]+$/,
		message: '생년월일에는 숫자만 입력해주세요',
	},
	maxLength: {
		value: 8,
		message: '8자 이하로 입력해주세요',
	},
}
const SignUpPhone = {
	required: {
		value: true,
		message: '핸드폰 번호를 입력해주세요',
	},
	pattern: {
		value: /^[0-9]+$/,
		message: '핸드폰 번호(- 없이) 11자를 입력해주세요',
	},
	maxLength: {
		value: 11,
		message: '11자 이하로 입력해주세요',
	},
}

export const HookFormRule = {
	SignUpEmail,
	SignUpName,
	SignUpNickName,
	SignUpPw,
	SignUpBirthday,
	SignUpPhone,
}
