import styled from 'styled-components'
import Input from '../../../Components/Input/Input'
import {
	FlexCenterCSS,
	FlexColumnCSS,
	TopPadding,
} from '../../../Styles/common'

import { FlexAlignCSS } from '../../../Styles/common'
import Button from '../../../Components/Button/Button'
import Notice from './Components/Notice'
import { SubmitHandler, useForm } from 'react-hook-form'
import { HookFormRule } from '../../../Consts/HookFormRule'
import HookFormError from '../../../Components/Error/HookFormError'
import NotificationModal from '../../../Components/Modal/NotificationModal'
import { useRecoilState } from 'recoil'
import { modalViewNotification } from '../../../Atoms/modalView.atom'
import { useMutation } from '@tanstack/react-query'
import UserApi from '../../../Apis/UserApi'
import { modalViewSuccess } from '../../../Atoms/modalViewSuccess.atom'
import SuccessModal from '../../../Components/Modal/successModal'
import {
	Camera_Icon,
	Date_Icon,
	Email_Icon,
	Lock_Icon,
	Name_Icon,
	Nickname_Icon,
	Phone_Icon,
} from '../../../Icons/Icons'
import { signUpData } from '../../../Types/apiType'
import { SignUpSubmitData, OnBlurType } from '../../../Types/type'
import { useState } from 'react'

function SignUp() {
	const {
		register,
		handleSubmit,
		watch,
		getValues,
		formState: { errors },
	} = useForm()
	const [preFile, setPreFile] = useState<string | null>('')
	const [imgFile, setImgFile] = useState<File | null>()
	const [validationMsg, setValidationMsg] = useState({
		email: { status: null, message: '' },
		nickname: { status: null, message: '' },
	})

	const [recoilCounter, setRecoilCounter] = useRecoilState(
		modalViewNotification,
	)
	const [recoilSuccessModal, setRecoilSuccessModal] =
		useRecoilState(modalViewSuccess)

	//profileImage 추가해야함
	const { mutate, isLoading, data } = useMutation(
		(data: signUpData) => UserApi.SignUp(data),
		{
			onSuccess: res => {
				setRecoilSuccessModal(() => true)
			},
			onError: err => {},
		},
	)

	const ChangePreFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files !== null) {
			const file = e.target.files[0]
			setImgFile(file)
			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onloadend = () => {
				setPreFile(reader.result as string)
			}
		}
	}

	const onValidation = async (target: string) => {
		//SignUpEmail
		//SignUpNickName
		const value = getValues(target)
		if (value.trim().length === 0) return

		if (target === 'SignUpEmail') {
			try {
				const res = await UserApi.getEmailValidation(value)
				setValidationMsg((prev: any) => ({
					...prev,
					email: { status: true, message: '사용 가능한 이메일입니다.' },
				}))
				console.log(res)
			} catch (err: any) {
				// setValidationMsg(res.err.error.message)
				console.log(err)

				const { message } = err?.response.data.error
				console.log(message)
				if (message === 'invalid form email') {
					// setValidationMsg(prev => ({
					// 	...prev,
					// 	email: { status: true, message: '이메일 형식이 아니에요' },
					// }))
					setValidationMsg((prev: any) => ({
						...prev,
						email: { status: false, message: '이메일 형식이 아니에요' },
					}))
				}
				//보류 에러처리하는 함수도 만들어야할까? 생각중
			}
		}
		if (target === 'SignUpNickName') {
			try {
				const res = await UserApi.getNickNameValidation(value)
				console.log(res)
			} catch (err) {}
		}
	}

	const onSubmit: SubmitHandler<SignUpSubmitData> = e => {
		//보류

		let formData: any = new FormData()
		formData.append('multipartFile', imgFile)
		console.log(typeof e.SignUpBirthday)
		const data = {
			email: e.SignUpEmail?.trim() || '',
			name: e.SignUpName?.trim() || '',
			nickname: e.SignUpNickName?.trim() || '',
			password: e.SignUpPw?.trim() || '',
			birthDate: e.SignUpBirthday?.trim() || '',
			phoneNumber: e.SignUpPhone?.trim() || '',
			multipartFile: formData?.trim(),
		}

		mutate(data)
	}

	return (
		<S.Wrapper onSubmit={handleSubmit(onSubmit)}>
			<S.container>
				<h3>회원가입</h3>
				<S.InputBox>
					<S.ProfileImg src={preFile as string} />
					<S.ImgLabel htmlFor="profileImg">
						<Camera_Icon />
					</S.ImgLabel>
					<Input
						type="file"
						id="profileImg"
						accept="image/*"
						style={{ display: 'none' }}
						{...register('profile_img', {
							onChange: e => {
								ChangePreFile(e)
							},
						})}
						s
					/>
				</S.InputBox>
				{/* 이메일 검증 */}
				<span>
					<Email_Icon size={'22'} />
					<Input
						placeholder="example@assembled.com"
						{...register('SignUpEmail', HookFormRule.SignUpEmail)}
					/>
					<S.ValidationBtn
						type="button"
						value="중복확인"
						onClick={() => onValidation('SignUpEmail')}
					/>
				</span>
				{errors.SignUpEmail && (
					<HookFormError>
						{errors.SignUpEmail?.message?.toString()}
					</HookFormError>
				)}
				{validationMsg.email.message}
				<span>
					<Name_Icon size={'22'} />
					<Input
						placeholder="이름을 입력해주세요"
						{...register('SignUpName', HookFormRule.SignUpName)}
					/>
				</span>
				{errors.SignUpName && (
					<HookFormError>
						{errors.SignUpName?.message?.toString()}
					</HookFormError>
				)}
				{/* 닉네임 검증 */}
				<span>
					<Nickname_Icon size={'22'} />
					<Input
						placeholder="닉네임을 입력해주세요"
						{...register('SignUpNickName', HookFormRule.SignUpNickName)}
					/>
					<S.ValidationBtn
						type="button"
						value="중복확인"
						onClick={() => onValidation('SignUpNickName')}
					/>
				</span>
				{errors.SignUpNickName && (
					<HookFormError>
						{errors.SignUpNickName?.message?.toString()}
					</HookFormError>
				)}
				<span>
					<Lock_Icon size={'22'} />
					<Input
						placeholder="비밀번호를 입력해주세요"
						{...register('SignUpPw', HookFormRule.SignUpPw)}
					/>
				</span>
				{errors.SignUpPw && (
					<HookFormError>{errors.SignUpPw?.message?.toString()}</HookFormError>
				)}
				<span>
					<Lock_Icon size={'22'} />
					<Input
						placeholder="위에 설정한 비밀번호를 입력해주세요"
						{...register('SignUpPwConfirm', {
							required: '비밀번호 확인을 입력해주세요',
							validate: val =>
								val === watch('SignUpPw') ||
								'입력한 비밀번호와 일치하지 않습니다',
						})}
					/>
				</span>
				{errors.SignUpPwConfirm && (
					<HookFormError>
						{errors.SignUpPwConfirm?.message?.toString()}
					</HookFormError>
				)}
				<span>
					<Date_Icon size={'22'} />
					<Input
						placeholder="생년월일(8자리) ex) 19980505"
						{...register('SignUpBirthday', HookFormRule.SignUpBirthday)}
					/>
				</span>
				{errors.SignUpBirthday && (
					<HookFormError>
						{errors.SignUpBirthday?.message?.toString()}
					</HookFormError>
				)}
				<span>
					<Phone_Icon size={'22'} />
					<Input
						placeholder="휴대폰 번호를 -없이 입력해주세요"
						{...register('SignUpPhone', HookFormRule.SignUpPhone)}
					/>
				</span>
				{errors.SignUpPhone && (
					<HookFormError>
						{errors.SignUpPhone?.message?.toString()}
					</HookFormError>
				)}
				<Notice />
				<S.SignUpButton disabled={true}>회원가입</S.SignUpButton>
				{recoilSuccessModal && (
					<SuccessModal text={'회원가입 성공'} url={'/login'} />
				)}
				{recoilCounter && <NotificationModal text={'실패'} />}
			</S.container>
		</S.Wrapper>
	)
}
export default SignUp

const Wrapper = styled.form`
	${TopPadding}
	display: flex;
	justify-content: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`
const container = styled.div`
	min-width: 25%;
	h3 {
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
		margin: 3rem 0 2rem 0;
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
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 90%;
	}
`
const SignUpButton = styled(Button)`
	margin-top: 2rem;
`
const InputBox = styled.div`
	${FlexAlignCSS}
	padding-left: 5rem;
	margin-bottom: 1.5rem;
`
const ImgLabel = styled.label`
	cursor: pointer;
	position: relative;
	right: 5.5rem;
	top: 6.4rem;
	width: 3.8rem;
	height: 3.8rem;
	border-radius: 50%;
	border: 1px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	font-size: ${({ theme }) => theme.FONT_SIZE.small};

	background: ${({ theme }) => theme.COLOR.common.white};
	${FlexCenterCSS}
`
const ProfileImg = styled.img`
	text-align: center;
	border-radius: 50%;
	width: 20.2rem;
	height: 20.2rem;
	margin-right: 2rem;
	border: 1px solid ${({ theme }) => theme.COLOR.hover};
	background: ${({ theme }) => theme.COLOR.common.white};
`
const ValidationBtn = styled.input`
	width: 10rem;
	height: 80%;
	border: none;
	border-radius: 0.4rem;
	background: ${({ theme }) => theme.COLOR.sub};
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	color: ${({ theme }) => theme.COLOR.common.white};
	&:hover {
		background: ${({ theme }) => theme.COLOR.hover};
	}
`

const S = {
	Wrapper,
	container,
	SignUpButton,
	InputBox,
	ImgLabel,
	ProfileImg,
	ValidationBtn,
}
