import styled from 'styled-components'
import {
	FlexAlignCSS,
	FlexBetweenCSS,
	FlexCenterCSS,
	FlexColumnCSS,
} from '../../../../../Styles/common'
import Button from '../../../../../Components/Button/Button'
import {
	CancelbigIcon,
	DateIcon,
	EmailIcon,
	LockIcon,
	NameIcon,
	PhoneIcon,
} from '../../../../../Icons/Icons'
import Input from '../../../../../Components/Input/Input'
import { useState } from 'react'
import HookFormError from '../../../../../Error/HookFormError'
import UserApi from '../../../../../Apis/UserApi'
import ChangePassword from './ChangePassword'
import { useMutation } from '@tanstack/react-query'
import { FindPasswordProp } from '../../../../../Types/apiType'
import { postLogInData } from '../../../../../Types/mswType'

interface FindEmailModalTypeProps {
	setModalView: (state: boolean) => void | undefined
	isLogin: boolean
}

function FindPasswordModal({ setModalView, isLogin }: FindEmailModalTypeProps) {
	const [passwordVal, setPasswordVal] = useState<{
		email: string
		name: string
		phoneNumber: string
		birthDate: string
		PwBeforeChange: string
	}>({
		email: '',
		name: '',
		phoneNumber: '',
		birthDate: '',
		PwBeforeChange: '',
	})
	const [errorStatus, setErrorStatus] = useState<{
		isError: boolean
		message: null | string
	}>({
		isError: false,
		message: null,
	})
	const [successStatus, setSuccessStatus] = useState<{
		isFind: boolean
		token: string | null
	}>({
		isFind: false,
		token: null,
	})

	const { mutate } = useMutation(
		(data: FindPasswordProp) => UserApi.postFindPassword(data),
		{
			onSuccess: res => {
				setSuccessStatus(prev => ({
					isFind: true,
					token: res.data.response.token,
				}))
			},
			onError: (err: any) => {
				const error = err?.response.data.error

				if (error.status === 404) {
					setErrorStatus({
						isError: true,
						message: '잘못된 회원 정보입니다.',
					})
				}
			},
		},
	)
	const { mutate: LoginFindPw } = useMutation(
		(data: Pick<postLogInData, 'password'>) =>
			UserApi.postLoginFindPassword(data),
		{
			onSuccess: res => {
				setSuccessStatus(() => ({
					isFind: true,
					token: res.data.response.token,
				}))
			},
			onError: (err: any) => {
				const error = err?.response.data.error
				if (error.status === 400) {
					setErrorStatus({
						isError: true,
						message: error.message,
					})
				}
			},
		},
	)

	const FindPassword = () => {
		if (
			passwordVal.email.length === 0 ||
			passwordVal.name?.length === 0 ||
			passwordVal.phoneNumber?.length === 0 ||
			passwordVal.birthDate?.length === 0
		)
			return setErrorStatus({
				isError: true,
				message: '이메일, 이름, 전화번호, 생년월일 모두 입력해주세요',
			})
		if (passwordVal.phoneNumber?.length !== 11)
			return setErrorStatus({
				isError: true,
				message: '전화번호 11자리 입력해주세요',
			})
		if (passwordVal.birthDate?.length !== 8)
			return setErrorStatus({
				isError: true,
				message: '생년월일 8자리 입력해주세요',
			})

		mutate(passwordVal)
	}
	const LoginFindPassword = () => {
		if (passwordVal.PwBeforeChange.length === 0)
			return setErrorStatus({
				isError: true,
				message: '기존 비밀번호를 입력해주세요',
			})

		LoginFindPw({ password: passwordVal.PwBeforeChange })
	}
	const onKeyDownChangePw = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.nativeEvent.isComposing) return
		if (e.key === 'Enter') {
			e.preventDefault()
			if (passwordVal.PwBeforeChange.length === 0)
				return setErrorStatus({
					isError: true,
					message: '기존 비밀번호를 입력해주세요',
				})

			LoginFindPw({ password: passwordVal.PwBeforeChange })
		}
	}

	const onChangeInputVal = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.id === 'email') {
			setPasswordVal(prev => ({
				...prev,
				email: e.target.value,
			}))
		}
		if (e.target.id === 'name') {
			setPasswordVal(prev => ({
				...prev,
				name: e.target.value,
			}))
		}
		if (e.target.id === 'phoneNumber') {
			setPasswordVal(prev => ({
				...prev,
				phoneNumber: e.target.value,
			}))
		}
		if (e.target.id === 'birthDate') {
			setPasswordVal(prev => ({
				...prev,
				birthDate: e.target.value,
			}))
		}
		if (e.target.id === 'PwBeforeChange') {
			setPasswordVal(prev => ({
				...prev,
				PwBeforeChange: e.target.value,
			}))
		}
		setErrorStatus({
			isError: false,
			message: null,
		})
	}

	return (
		<S.Wrapper>
			<S.Box>
				<S.TitleHead>
					<h4>
						{successStatus.isFind === false
							? '비밀번호 찾기'
							: '비밀번호 재설정'}
					</h4>
					<div>
						<CancelbigIcon onClick={() => setModalView(false)} />
					</div>
				</S.TitleHead>
				{successStatus.isFind === false ? (
					<>
						{isLogin ? (
							<>
								<S.InputWrap>
									<LockIcon />
									<Input
										placeholder="기존 비밀번호를 입력해주세요"
										type="password"
										id="PwBeforeChange"
										onChange={onChangeInputVal}
										onKeyDown={onKeyDownChangePw}
									/>
								</S.InputWrap>
								<S.ErrorWrap>
									{errorStatus.isError === true && (
										<HookFormError>{errorStatus.message}</HookFormError>
									)}
								</S.ErrorWrap>
								<S.ButtonWrap>
									<Button type="button" onClick={LoginFindPassword}>
										새비밀번호 변경
									</Button>
								</S.ButtonWrap>
							</>
						) : (
							<>
								<S.InputWrap>
									<EmailIcon />
									<Input
										placeholder="이메일"
										id="email"
										onChange={onChangeInputVal}
									/>
								</S.InputWrap>
								<S.InputWrap>
									<NameIcon />
									<Input
										placeholder="이름"
										id="name"
										onChange={onChangeInputVal}
									/>
								</S.InputWrap>
								<S.InputWrap>
									<PhoneIcon />
									<Input
										placeholder="휴대폰 번호를 -없이 입력해주세요"
										maxlength="11"
										id="phoneNumber"
										onChange={onChangeInputVal}
									/>
								</S.InputWrap>
								<S.InputWrap>
									<DateIcon />
									<Input
										placeholder="생년월일(8자리) ex) 19980505"
										maxlength="8"
										id="birthDate"
										onChange={onChangeInputVal}
									/>
								</S.InputWrap>
								<S.ErrorWrap>
									{errorStatus.isError === true && (
										<HookFormError>{errorStatus.message}</HookFormError>
									)}
								</S.ErrorWrap>
								<S.ButtonWrap>
									<Button type="button" onClick={FindPassword}>
										비밀번호 찾기
									</Button>
								</S.ButtonWrap>
							</>
						)}
					</>
				) : (
					<ChangePassword
						setModalView={setModalView}
						token={successStatus.token!}
					/>
				)}
			</S.Box>
		</S.Wrapper>
	)
}

export default FindPasswordModal

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.4);
	${FlexCenterCSS}
`
const Box = styled.div`
	width: 45rem;
	${FlexColumnCSS}
	align-items: center;
	padding: 2rem 0;
	text-align: center;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.COLOR.common.white};

	animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
	position: fixed;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 80%;
	}
	@keyframes fadeIn {
		0% {
			top: -20rem;
		}

		100% {
			top: 30%;
		}
	}
`

const TitleHead = styled.div`
	margin: 0 2.1rem 2rem 2.1rem;
	width: 90%;
	${FlexBetweenCSS}
	&>div {
		cursor: pointer;
	}
`
const InputWrap = styled.div`
	${FlexAlignCSS}
	width: 90%;
	border-bottom: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};
	margin-bottom: 0.5rem;
`
const ButtonWrap = styled.div`
	width: 90%;
	margin-top: 2rem;
`
const ErrorWrap = styled.div`
	width: 90%;
	text-align: start;
`
const SuccessEmail = styled.div`
	text-align: start;
	width: 90%;
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	margin-bottom: 2rem;
	& > span {
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
		background-color: ${({ theme }) => theme.COLOR.orange};
		padding: 0.5rem;
		border-radius: 0.5rem;
	}
`
const Title = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
	margin-bottom: 1rem;
`
const Email = styled.div`
	margin: 1rem 0;
`
const S = {
	Wrapper,
	Box,
	InputWrap,
	TitleHead,
	ButtonWrap,
	ErrorWrap,
	SuccessEmail,
	Title,
	Email,
}
