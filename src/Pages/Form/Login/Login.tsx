import styled from 'styled-components'
import Input from '../../../Components/Input/Input'
import { FlexColumnCSS, TopPadding } from '../../../Styles/common'
import { FlexAlignCSS } from '../../../Styles/common'
import Button from '../../../Components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import HookFormError from '../../../Error/HookFormError'
import { useMutation } from '@tanstack/react-query'
import UserApi from '../../../Apis/UserApi'
import { useAuth } from '../../../Contexts/auth'
import { Email_Icon, Lock_Icon } from '../../../Icons/Icons'
import { LoginData } from '../../../Types/apiType'
import { LoginSubmitData } from '../../../Types/type'
import { useState } from 'react'
import { userRole } from '../../../Atoms/UserRole.atom'
import { useRecoilState } from 'recoil'
import FindEmailModal from './Components/FindEmailModal'

export interface UserInfoType {
	nickname: string
	profile?: string
}

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const [recoilCounter, setRecoilCounter] = useRecoilState<string | null>(
		userRole,
	)
	const [findEmailModalView, setFindEmailModalView] = useState<boolean>(false)

	const [loginError, setLoginError] = useState<null | string>(null)
	const navigate = useNavigate()
	const auth = useAuth()

	const { mutate } = useMutation((data: LoginData) => UserApi.Login(data), {
		onSuccess: res => {
			const { nickname, profile, role } = res?.data?.response
			setRecoilCounter(role)

			if (res.data.response.token.accessToken) {
				auth.login(
					res.data.response.token.accessToken,
					res.data.response.userId,
					role,
					nickname,
				)
			}
			navigate('/')
		},
		onError: () => {
			setLoginError('이메일 혹은 비밀번호가 틀렸습니다.')
		},
	})

	const onSubmit: SubmitHandler<LoginSubmitData> = e => {
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
					<Email_Icon />
					<Input
						placeholder="example@assembled.com"
						{...register('LoginEmail', { required: '이메일을 입력해주세요' })}
					/>
				</span>
				{errors.LoginEmail && (
					<HookFormError>
						{errors.LoginEmail?.message?.toString()}
					</HookFormError>
				)}
				<span>
					<Lock_Icon />
					<Input
						type="password"
						placeholder="비밀번호를 입력해주세요"
						{...register('LoginPW', { required: '비밀번호를 입력해주세요' })}
					/>
				</span>
				{errors.LoginPW && (
					<HookFormError>{errors.LoginPW?.message?.toString()}</HookFormError>
				)}
				{loginError !== null && <HookFormError>{loginError}</HookFormError>}
				<S.FindEmail>
					<div onClick={() => setFindEmailModalView(true)}>
						이메일을 잊으셨나요?
					</div>
				</S.FindEmail>
				<S.SignUpButton>로그인</S.SignUpButton>
				<S.GoSignUp>
					아직 어셈블 계정이 없나요?
					<S.LinkDesign to={'/Signup'}> 회원가입하기</S.LinkDesign>
				</S.GoSignUp>
			</S.container>
			{findEmailModalView && (
				<FindEmailModal setModalView={setFindEmailModalView} />
			)}
		</S.Wrapper>
	)
}
export default Login

const Wrapper = styled.form`
	${TopPadding}
	display: flex;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
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
	margin-top: 2rem;
`
const LinkDesign = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.COLOR.hover};
`
const GoSignUp = styled.div`
	margin-top: 2rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`
const FindEmail = styled.div`
	width: 100%;
	& > div {
		text-align: start;
		width: 14rem;
		margin-top: 1rem;
		text-decoration: underline;
		color: ${({ theme }) => theme.COLOR.common.gray[300]};
		cursor: pointer;
	}
`

const S = { Wrapper, container, SignUpButton, GoSignUp, LinkDesign, FindEmail }
