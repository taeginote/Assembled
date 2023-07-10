import styled from 'styled-components'
import {
	FlexAlignCSS,
	FlexCenterCSS,
	FlexColumnCSS,
} from '../../../Styles/common'
import {
	Camera_Icon,
	Date_Icon,
	Email_Icon,
	Lock_Icon,
	Name_Icon,
	Nickname_Icon,
	Phone_Icon,
} from '../../../Icons/Icons'
import Input from '../../../Components/Input/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import { HookFormRule } from '../../../Consts/HookFormRule'
import HookFormError from '../../../Components/Error/HookFormError'
import Button from '../../../Components/Button/Button'

function Edit() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const [imgFile, setImgFile] = useState<File | null>()
	const [preFile, setPreFile] = useState<string | null>('')

	const onSubmit: SubmitHandler<any> = e => {}
	console.log(preFile)

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

	return (
		<S.Wrapper onSubmit={handleSubmit(onSubmit)}>
			<S.Container>
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
							onChange: (e: any) => {
								ChangePreFile(e)
							},
						})}
					/>
				</S.InputBox>
				<span>
					<Email_Icon size={'22'} />
					<Input
						placeholder="example@assembled.com"
						{...register('SignUpEmail', HookFormRule.SignUpEmail)}
					/>
				</span>
				{errors.SignUpEmail && (
					<HookFormError>
						{errors.SignUpEmail?.message?.toString()}
					</HookFormError>
				)}
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
				<span>
					<Nickname_Icon size={'22'} />
					<Input
						placeholder="닉네임을 입력해주세요"
						{...register('SignUpNickName', HookFormRule.SignUpNickName)}
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
				<S.SignUpButton>수정 완료 </S.SignUpButton>
			</S.Container>
		</S.Wrapper>
	)
}
export default Edit

const Wrapper = styled.div`
	${FlexColumnCSS}
	width: 30%;
`
const Container = styled.div`
	width: 100%;
	${FlexColumnCSS}
	align-items: center;
	& > span {
		${FlexAlignCSS}
		width: 100%;
		margin-bottom: 1rem;
		margin-top: 2rem;
		border-bottom: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};
	}
`
const InputBox = styled.div`
	${FlexAlignCSS}
	padding-left: 5rem;
	margin-bottom: 0.5rem;
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
const SignUpButton = styled(Button)`
	margin-top: 2rem;
`
const S = { Wrapper, Container, InputBox, ProfileImg, ImgLabel, SignUpButton }
