import styled from 'styled-components'
import Input from '../../../Components/Input/Input'
import { FlexColumnCSS, TopPadding } from '../../../Styles/common'
import {
	Date_Icon,
	Email_Icon,
	Lock_Icon,
	Name_Icon,
	Nickname_Icon,
	Phone_Icon,
} from '../../../Components/Icons/Icons'
import { FlexAlignCSS } from '../../../Styles/common'
import Button from '../../../Components/Button/Button'
import Notice from './Components/Notice'

function SignUp() {
	return (
		<S.Wrapper>
			<S.container>
				<h3>회원가입</h3>

				<span>
					<Email_Icon size={'22'} />
					<Input placeholder="example@assembled.com" />
				</span>
				<span>
					<Name_Icon size={'22'} />
					<Input placeholder="이름을 입력해주세요" />
				</span>
				<span>
					<Nickname_Icon size={'22'} />
					<Input placeholder="닉네임을 입력해주세요" />
				</span>
				<span>
					<Lock_Icon size={'22'} />
					<Input placeholder="비밀번호를 입력해주세요" />
				</span>
				<span>
					<Lock_Icon size={'22'} />
					<Input placeholder="위에 설정한 비밀번호를 입력해주세요" />
				</span>
				<span>
					<Date_Icon size={'22'} />
					<Input placeholder="생년월일(8자리) ex) 19980505" />
				</span>
				<span>
					<Phone_Icon size={'22'} />
					<Input placeholder="휴대폰 번호를 -없이 입력해주세요" />
				</span>
				<S.SignUpButton>로그인</S.SignUpButton>
				<Notice />
			</S.container>
		</S.Wrapper>
	)
}
export default SignUp

const Wrapper = styled.form`
	${TopPadding}
	display: flex;
	justify-content: center;
`
const container = styled.div`
	width: 25%;
	h3 {
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
		margin: 7rem 0 5rem 0;
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	}
	span {
		${FlexAlignCSS}
		width: 100%;
		margin-bottom: 1rem;
		border-bottom: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};
	}
	${FlexColumnCSS}
	align-items: center;
`
const SignUpButton = styled(Button)`
	margin-top: 2rem;
`

const S = { Wrapper, container, SignUpButton }
