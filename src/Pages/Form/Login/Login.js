import styled from 'styled-components'
import Input from '../../../Components/Input/Input'
import { FlexColumnCSS, TopPadding } from '../../../Styles/common'
import { FlexAlignCSS } from '../../../Styles/common'
import Button from '../../../Components/Button/Button'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import HookFormError from '../../../Components/Error/HookFormError'
import { useMutation } from '@tanstack/react-query'
import UserApi from '../../../Apis/UserApi'
import NotificationModal from '../../../Components/Modal/NotificationModal'
import { useRecoilState } from 'recoil'
import { modalViewNotification } from '../../../Atoms/modalView.atom'
import SuccessModal from '../../../Components/Modal/successModal'
import { modalViewSuccess } from '../../../Atoms/modalViewSuccess.atom'
import { useAuth } from '../../../Contexts/auth'
import { Email_Icon, Lock_Icon } from '../../../Icons/Icons'

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const [recoilCounter, setRecoilCounter] = useRecoilState(
		modalViewNotification,
	)
	const [recoilSuccessModal, setRecoilSuccessModal] =
		useRecoilState(modalViewSuccess)

	const auth = useAuth()

	const { mutate, isLoading } = useMutation(data => UserApi.Login(data), {
		onSuccess: res => {
			setRecoilSuccessModal(() => true)
			auth.login(res.data.token)
		},
		onError: err => {
			setRecoilCounter(() => true)
		},
	})

	const onSubmit = e => {
		const logInData = {
			email: e.LoginEmail,
			password: e.LoginPW,
		}
		mutate(logInData)
	}

	return (
		<S.Wrapper onSubmit={handleSubmit(onSubmit)}>
			<S.container>
				<h3>로그인</h3>

				<span>
					<Email_Icon size={'22'} />
					<Input
						placeholder="example@assembled.com"
						{...register('LoginEmail', { required: '이메일을 입력해주세요' })}
					/>
				</span>
				{errors.LoginEmail && (
					<HookFormError>{errors.LoginEmail.message}</HookFormError>
				)}
				<span>
					<Lock_Icon size={'22'} />
					<Input
						placeholder="비밀번호를 입력해주세요"
						{...register('LoginPW', { required: '비밀번호를 입력해주세요' })}
					/>
				</span>
				{errors.LoginPW && (
					<HookFormError>{errors.LoginPW.message}</HookFormError>
				)}
				<S.GoSignUp>
					아직 어셈블 계정이 없나요?
					<S.LinkDesign to={'/Signup'}> 회원가입하기</S.LinkDesign>
				</S.GoSignUp>
				<S.SignUpButton>로그인</S.SignUpButton>
				{recoilSuccessModal && <SuccessModal text={'로그인 성공'} />}
				{recoilCounter && <NotificationModal text={'로그인 실패'} />}
			</S.container>
		</S.Wrapper>
	)
}
export default Login

const Wrapper = styled.form`
	${TopPadding}
	display: flex;
	justify-content: center;
`
const container = styled.div`
	min-width: 25%;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 90%;
	}
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
	margin-top: 3rem;
`
const LinkDesign = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.COLOR.hover};
`
const GoSignUp = styled.div`
	margin-top: 2rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`

const S = { Wrapper, container, SignUpButton, GoSignUp, LinkDesign }
