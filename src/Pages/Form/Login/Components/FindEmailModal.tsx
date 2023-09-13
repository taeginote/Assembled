import styled from 'styled-components'
import { FlexBetweenCSS, FlexCenterCSS } from '../../../../Styles/common'
import Input from '../../../../Components/Input/Input'
import {
	Cancel_big_Icon,
	Date_Icon,
	Name_Icon,
	Phone_Icon,
} from '../../../../Icons/Icons'
import { FlexAlignCSS } from '../../../../Styles/common'
import { FlexColumnCSS } from '../../../../Styles/common'
import Button from '../../../../Components/Button/Button'
import { useState } from 'react'
import UserApi from '../../../../Apis/UserApi'
import HookFormError from '../../../../Error/HookFormError'

interface FindEmailModalTypeProps {
	setModalView: (state: boolean) => void | undefined
}

function FindEmailModal({ setModalView }: FindEmailModalTypeProps) {
	const [nameAndPhoneVal, setNameAndPhoneVal] = useState<{
		name: string
		phoneNumber: string
		birthDate: string
	}>({
		name: '',
		phoneNumber: '',
		birthDate: '',
	})
	const [errorStatus, setErrorStatus] = useState<{
		isError: boolean
		message: null | string
	}>({
		isError: false,
		message: null,
	})
	const [successStatus, setSuccessStatus] = useState<{
		isSuccess: boolean
		data: any
	}>({
		isSuccess: false,
		data: [],
	})

	const onFindEmail = async () => {
		if (
			nameAndPhoneVal.name?.length === 0 ||
			nameAndPhoneVal.phoneNumber?.length === 0 ||
			nameAndPhoneVal.birthDate?.length === 0
		)
			return setErrorStatus({
				isError: true,
				message: '이름, 전화번호, 생년월일 모두 입력해주세요',
			})
		if (nameAndPhoneVal.phoneNumber?.length !== 11)
			return setErrorStatus({
				isError: true,
				message: '전화번호 11자리 입력해주세요',
			})
		if (nameAndPhoneVal.birthDate?.length !== 8)
			return setErrorStatus({
				isError: true,
				message: '생년월일 8자리 입력해주세요',
			})

		try {
			const res = await UserApi.getFindEmail(nameAndPhoneVal)
			const { response }: any = res?.data

			setSuccessStatus({
				isSuccess: true,
				data: response,
			})
		} catch (err: any) {
			const error = err?.response.data.error

			if (error.status === 400) {
				setErrorStatus({
					isError: true,
					message: error.message,
				})
			}

			//성공 처리가 없어서 예시로 500으로 처리한거입니다. 변경 예정
		}
	}

	const onChangeInputVal = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.id === 'name') {
			setNameAndPhoneVal(prev => ({
				...prev,
				name: e.target.value,
			}))
			setErrorStatus({
				isError: false,
				message: null,
			})
		}
		if (e.target.id === 'phoneNumber') {
			setNameAndPhoneVal(prev => ({
				...prev,
				phoneNumber: e.target.value,
			}))
			setErrorStatus({
				isError: false,
				message: null,
			})
		}
		if (e.target.id === 'birthDate') {
			setNameAndPhoneVal(prev => ({
				...prev,
				birthDate: e.target.value,
			}))
			setErrorStatus({
				isError: false,
				message: null,
			})
		}
	}
	return (
		<S.Wrapper>
			<S.Box>
				<S.TitleHead>
					<h4>이메일 찾기</h4>
					<div>
						<Cancel_big_Icon onClick={() => setModalView(false)} />
					</div>
				</S.TitleHead>
				{successStatus.isSuccess !== true ? (
					<>
						<S.InputWrap>
							<Name_Icon />
							<Input placeholder="이름" id="name" onChange={onChangeInputVal} />
						</S.InputWrap>
						<S.InputWrap>
							<Phone_Icon />
							<Input
								placeholder="휴대폰 번호를 -없이 입력해주세요"
								maxlength="11"
								id="phoneNumber"
								onChange={onChangeInputVal}
							/>
						</S.InputWrap>
						<S.InputWrap>
							<Date_Icon />
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
							<Button type="button" onClick={onFindEmail}>
								이메일 찾기
							</Button>
						</S.ButtonWrap>
					</>
				) : (
					<S.SuccessEmail>
						<S.Title>사용자의 정보로 가입된 이메일들 입니다.</S.Title>
						{successStatus.data.map((el: any, idx: number) => (
							<S.Email key={idx}>
								{idx + 1}. {el.email}
							</S.Email>
						))}
					</S.SuccessEmail>
				)}
			</S.Box>
		</S.Wrapper>
	)
}
export default FindEmailModal

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
			top: 40%;
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
