import styled from 'styled-components'
import {
	FlexAlignCSS,
	FlexBetweenCSS,
	FlexCenterCSS,
	FlexColumnCSS,
} from '../../../../../Styles/common'
import Button from '../../../../../Components/Button/Button'
import Input from '../../../../../Components/Input/Input'
import { useState } from 'react'

import { Lock_Icon } from '../../../../../Icons/Icons'
import UserApi from '../../../../../Apis/UserApi'
import { useMutation } from '@tanstack/react-query'
import HookFormError from '../../../../../Error/HookFormError'

interface FindEmailModalTypeProps {
	setModalView: (state: boolean) => void | undefined
	token: string
}
interface ChangeEmailProps {
	token: string
	password: string
}
function ChangePassword({ setModalView, token }: FindEmailModalTypeProps) {
	const [passwordVal, setPasswordVal] = useState<{
		password: string
		passwordConfirm: string
	}>({
		password: '',
		passwordConfirm: '',
	})
	const [isStatus, setIsStatus] = useState<{
		isStatus: null | 'error' | 'success'
		message: null | string
	}>({
		isStatus: null,
		message: null,
	})

	const { mutate } = useMutation(
		(data: ChangeEmailProps) => UserApi.putChangePassword(data),
		{
			onSuccess: res => {
				setIsStatus({
					isStatus: 'success',
					message: '🎉 비밀번호 변경 성공 🎉',
				})
			},
			onError: (err: any) => {},
		},
	)

	const onChangeInputVal = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.id === 'password') {
			setPasswordVal(prev => ({
				...prev,
				password: e.target.value,
			}))
		}
		if (e.target.id === 'passwordConfirm') {
			setPasswordVal(prev => ({
				...prev,
				passwordConfirm: e.target.value,
			}))
		}
		setIsStatus({
			isStatus: null,
			message: null,
		})
	}

	const onChangePassword = () => {
		if (
			passwordVal.password.length === 0 ||
			passwordVal.passwordConfirm.length === 0
		)
			return setIsStatus({
				isStatus: 'error',
				message: '새로운 비밀번호와 비밀번호 재확인을 둘다 입력해주세요',
			})

		if (passwordVal.password !== passwordVal.passwordConfirm)
			return setIsStatus({
				isStatus: 'error',
				message: '변경할 비밀번호와 재확인 비밀번호가 일치하지않습니다',
			})

		mutate({
			password: passwordVal.password,
			token,
		})
	}

	return (
		<>
			{isStatus.isStatus !== 'success' ? (
				<>
					<S.InputWrap>
						<Lock_Icon />
						<Input
							placeholder="변경할 비밀번호"
							id="password"
							type="password"
							onChange={onChangeInputVal}
						/>
					</S.InputWrap>
					<S.InputWrap>
						<Lock_Icon />
						<Input
							placeholder="변경할 비밀번호 확인"
							id="passwordConfirm"
							type="password"
							onChange={onChangeInputVal}
						/>
					</S.InputWrap>

					<S.ErrorWrap>
						{isStatus.isStatus === 'error' && (
							<HookFormError>{isStatus.message}</HookFormError>
						)}
					</S.ErrorWrap>
					<S.ButtonWrap>
						<Button type="button" onClick={onChangePassword}>
							비밀번호 변경
						</Button>
					</S.ButtonWrap>
				</>
			) : (
				<S.Success>{isStatus.message}</S.Success>
			)}
		</>
	)
}

export default ChangePassword

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
const Success = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.large};

	margin: 2rem 0 4rem;
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
	Success,
}
