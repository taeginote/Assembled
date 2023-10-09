import { styled } from 'styled-components'
import {
	FlexAlignCSS,
	FlexCenterCSS,
	FlexColumnCSS,
} from '../../../Styles/common'
import Button from '../../../Components/Button/Button'
import {
	CameraIcon,
	DateIcon,
	NameIcon,
	NicknameIcon,
	PhoneIcon,
} from '../../../Icons/Icons'

import SignUpInput from '../../Form/SignUp/Components/SignUpInput'
import Input from '../../../Components/Input/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import { HookFormRule } from '../../../Consts/HookFormRule'
import { UserInfoSubmitData } from '../../../Types/type'
import useGetUserInfoData from '../../../Hooks/Queries/get-userInfo'
import UserIdService from '../../../Utils/UserIdService'
import UserApi from '../../../Apis/UserApi'

import { signUpProps } from '../../../Types/apiType'

import { useMutation } from '@tanstack/react-query'
import SuccessModal from '../../../Components/Modal/successModal'
import ProfileImgReturn from '../../../Utils/ProfileImgReturn'
import FindPasswordModal from '../../Form/Login/Components/FindPassword/FindPasswordModal'

function UserSetting() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm()

	const userId = UserIdService.getUserId()
	const [preFile, setPreFile] = useState<string | null>('')
	const [imgFile, setImgFile] = useState<File | null>()
	const [successModal, setSuccessModal] = useState<boolean>(false)
	const [findPasswordModalView, setFindPasswordModalView] =
		useState<boolean>(false)

	const { data, isLoading, refetch } = useGetUserInfoData(userId)
	const profileImg = ProfileImgReturn(data?.response?.profile?.filePath)

	const { mutate } = useMutation(
		(
			data: Omit<signUpProps, 'password' | 'email' | 'gender' | 'profileImage'>,
		) => UserApi.PutUserInfo(data),
		{
			onSuccess: () => {
				setSuccessModal(true)
				refetch()
			},
			onError: () => {},
		},
	)
	const { mutate: ImgMutate } = useMutation(
		(profileImage: Pick<signUpProps, 'profileImage'>) =>
			UserApi.PutProfileImg(profileImage),
		{
			onSuccess: () => {},
			onError: () => {},
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

	const onSubmit: SubmitHandler<UserInfoSubmitData> = e => {
		const data = {
			name: e.SignUpName?.trim() || '',
			nickname: e.EditNickName?.trim() || '',
			birthDate: e.SignUpBirthday?.trim() || '',
			phoneNumber: e.SignUpPhone?.trim() || '',
		}
		mutate(data)

		if (imgFile === undefined) return
		let formData: any = new FormData()
		formData.append('profileImage', imgFile)
		ImgMutate(formData)
	}

	return (
		<>
			{!isLoading && (
				<S.Wrapper>
					<S.EachBoxForm onSubmit={handleSubmit(onSubmit)}>
						<S.ChangePw>내정보 수정</S.ChangePw>
						<S.container>
							<S.InputBox>
								<S.ProfileImg src={(preFile || profileImg) as string} />
								<S.ImgLabel htmlFor="profileImg">
									<CameraIcon />
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
								name="SignUpName"
								control={control}
								errorRules={HookFormRule.SignUpName}
								Icon={<NameIcon />}
								placeholder="이름을 입력해주세요"
								data={data?.response?.name}
							/>
							<SignUpInput
								name="EditNickName"
								control={control}
								errorRules={HookFormRule.SignUpNickName}
								Icon={<NicknameIcon />}
								placeholder="닉네임을 입력해주세요"
								data={data?.response?.nickname}
							/>
							<SignUpInput
								name="SignUpBirthday"
								control={control}
								errorRules={HookFormRule.SignUpBirthday}
								Icon={<DateIcon />}
								placeholder="생년월일(8자리) ex) 19980505"
								data={data?.response?.birthDate}
							/>
							<SignUpInput
								name="SignUpPhone"
								control={control}
								errorRules={HookFormRule.SignUpPhone}
								Icon={<PhoneIcon />}
								placeholder="휴대폰 번호를 -없이 입력해주세요"
								data={data?.response?.phoneNumber}
							/>
							<S.SignUpButton>수정 완료</S.SignUpButton>
						</S.container>
					</S.EachBoxForm>
					<S.EachBox>
						<S.ChangePw>비밀번호 변경</S.ChangePw>
						<S.ButtonBox>
							<Button
								type="button"
								variant="default-white"
								onClick={() => setFindPasswordModalView(true)}
							>
								비밀번호 변경하기 가기
							</Button>
						</S.ButtonBox>
					</S.EachBox>
					{successModal && (
						<SuccessModal
							text={'수정 완료'}
							url={'/myPage/setting/userSetting'}
							setState={setSuccessModal}
						/>
					)}
					{findPasswordModalView && (
						<FindPasswordModal
							setModalView={setFindPasswordModalView}
							isLogin={true}
						/>
					)}
				</S.Wrapper>
			)}
		</>
	)
}

export default UserSetting

const Wrapper = styled.div`
	width: 100%;
	${FlexColumnCSS}
	align-items: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		margin: 0;
	}
`
const EachBoxForm = styled.form`
	width: 50%;
	${FlexColumnCSS}
	align-items: center;
	padding: 3rem 0;
	border-bottom: 2px solid ${({ theme }) => theme.COLOR.orange};
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 90%;
	}
`
const EachBox = styled.div`
	width: 50%;
	${FlexColumnCSS}
	align-items: center;
	padding: 3rem 0;
	border-bottom: 2px solid ${({ theme }) => theme.COLOR.orange};
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 90%;
	}
`
const container = styled.div`
	min-width: 30rem;
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
const ChangePw = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	text-align: start;
	margin-bottom: 2rem;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`
const ButtonBox = styled.div`
	width: 65%;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 90%;
	}
`
const S = {
	Wrapper,
	container,
	SignUpButton,
	InputBox,
	ImgLabel,
	ProfileImg,
	EachBox,
	ChangePw,
	ButtonBox,
	EachBoxForm,
}
