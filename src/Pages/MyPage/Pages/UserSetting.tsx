import { styled } from 'styled-components'
import {
	FlexAlignCSS,
	FlexCenterCSS,
	FlexColumnCSS,
	TopPadding,
} from '../../../Styles/common'
import Button from '../../../Components/Button/Button'
import {
	Camera_Icon,
	Date_Icon,
	Email_Icon,
	Lock_Icon,
	Name_Icon,
	Nickname_Icon,
	Phone_Icon,
} from '../../../Icons/Icons'
import HookFormError from '../../../Components/Error/HookFormError'
import SignUpInput from '../../Form/SignUp/Components/SignUpInput'
import Input from '../../../Components/Input/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import { HookFormRule } from '../../../Consts/HookFormRule'
import { SignUpSubmitData } from '../../../Types/type'
import useGetUserInfoData from '../../../Hooks/Queries/get-userInfo'
import UserIdService from '../../../Utils/UserIdService'
import UserApi from '../../../Apis/UserApi'
import SignUpValidationError from '../../../Error/SignUpValidationError'
import { ApiError } from '../../../Types/apiType'
import { ValidationMsg } from '../../Form/SignUp/SignUp'

function UserSetting() {
	const {
		register,
		handleSubmit,
		watch,
		getValues,
		control,
		formState: { errors },
	} = useForm()

	const userId = UserIdService.getUserId()

	const { data, isLoading } = useGetUserInfoData(userId)

	const [validationMsg, setValidationMsg] = useState<ValidationMsg>({
		email: { status: false, message: '' },
		nickname: { status: false, message: '' },
	})
	const [preFile, setPreFile] = useState<string | null>('')
	const [imgFile, setImgFile] = useState<File | null>()

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
		const value = getValues(target)
		if (value?.trim().length === 0 || value === undefined) return

		if (target === 'SignUpEmail') {
			try {
				const res = await UserApi.getEmailValidation(value)
				const { response }: any = res?.data
				SignUpValidationError('SignUpEmail', setValidationMsg, response)
			} catch (err: ApiError | any) {
				const response = err?.response.data.status
				SignUpValidationError('SignUpEmail', setValidationMsg, response)
			}
		}
		if (target === 'SignUpNickName') {
			try {
				const res = await UserApi.getNickNameValidation(value)
				const { response }: any = res?.data
				SignUpValidationError('SignUpNickName', setValidationMsg, response)
			} catch (err: ApiError | any) {
				const response = err?.response.data.status
				SignUpValidationError('SignUpNickName', setValidationMsg, response)
			}
		}
	}

	const onSubmit: SubmitHandler<SignUpSubmitData> = e => {
		if (validationMsg.email.status !== 'success') {
			return setValidationMsg((prev: ValidationMsg) => ({
				...prev,
				email: { status: 'error', message: '이메일 중복확인 해주세요' },
			}))
		}
		if (validationMsg.nickname.status !== 'success') {
			return setValidationMsg((prev: ValidationMsg) => ({
				...prev,
				nickname: { status: 'error', message: '닉네임 중복확인 해주세요' },
			}))
		}
	}

	return (
		<>
			{!isLoading && (
				<S.Wrapper onSubmit={handleSubmit(onSubmit)}>
					<S.container>
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
							/>
						</S.InputBox>
						<SignUpInput
							name="SignUpEmail"
							control={control}
							errorRules={HookFormRule.SignUpEmail}
							Icon={<Email_Icon />}
							placeholder="example@assembled.com"
							onValidation={onValidation}
							data={data?.response?.email}
						/>
						{validationMsg.email.status && (
							<HookFormError status={validationMsg.email.status}>
								{validationMsg.email.message}
							</HookFormError>
						)}
						<SignUpInput
							name="SignUpName"
							control={control}
							errorRules={HookFormRule.SignUpName}
							Icon={<Name_Icon />}
							placeholder="이름을 입력해주세요"
							data={data?.response?.name}
						/>
						<SignUpInput
							name="SignUpNickName"
							control={control}
							errorRules={HookFormRule.SignUpNickName}
							Icon={<Nickname_Icon />}
							placeholder="닉네임을 입력해주세요"
							onValidation={onValidation}
							data={data?.response?.nickname}
						/>
						{validationMsg.nickname.status && (
							<HookFormError status={validationMsg.nickname.status}>
								{validationMsg.nickname.message}
							</HookFormError>
						)}
						{/* <SignUpInput
							name="SignUpPw"
							control={control}
							errorRules={HookFormRule.SignUpPw}
							Icon={<Lock_Icon />}
							placeholder="비밀번호를 입력해주세요"
						/>
						<span>
							<Lock_Icon />
							<Input
								type="password"
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
						)} */}
						<SignUpInput
							name="SignUpBirthday"
							control={control}
							errorRules={HookFormRule.SignUpBirthday}
							Icon={<Date_Icon />}
							placeholder="생년월일(8자리) ex) 19980505"
						/>
						<SignUpInput
							name="SignUpPhone"
							control={control}
							errorRules={HookFormRule.SignUpPhone}
							Icon={<Phone_Icon />}
							placeholder="휴대폰 번호를 -없이 입력해주세요"
							data={data?.response?.phoneNumber}
						/>
						<S.SignUpButton>수정 완료</S.SignUpButton>
					</S.container>
				</S.Wrapper>
			)}
		</>
	)
}

export default UserSetting

const Wrapper = styled.form`
	width: 100%;
	display: flex;
	justify-content: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		margin: 0;
	}
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

const S = {
	Wrapper,
	container,
	SignUpButton,
	InputBox,
	ImgLabel,
	ProfileImg,
}
