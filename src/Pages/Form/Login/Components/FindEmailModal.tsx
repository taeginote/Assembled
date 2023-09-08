import styled from 'styled-components'
import { FlexBetweenCSS, FlexCenterCSS } from '../../../../Styles/common'
import Input from '../../../../Components/Input/Input'
import { Cancel_big_Icon, Name_Icon, Phone_Icon } from '../../../../Icons/Icons'
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
	}>({
		name: '',
		phoneNumber: '',
	})
	const [errorStatus, setErrorStatus] = useState<{
		status: null | 'error' | 'success'
		message: null | string
	}>({
		status: null,
		message: null,
	})

	const onFindEmail = async () => {
		if (
			nameAndPhoneVal.name?.length === 0 ||
			nameAndPhoneVal.phoneNumber?.length === 0
		)
			return setErrorStatus({
				status: 'error',
				message: '이름, 전화번호 둘다 입력해주세요',
			})
		if (nameAndPhoneVal.phoneNumber?.length !== 11)
			return setErrorStatus({
				status: 'error',
				message: '전화번호 11자리 입력해주세요',
			})

		try {
			const res = await UserApi.getFindEmail(nameAndPhoneVal)
			const { response }: any = res?.data
		} catch (err: any) {
			const error = err?.response.data.error
			if (error.status === 400) {
				setErrorStatus({
					status: 'error',
					message: error.message,
				})
			}
		}
	}

	const onChangeInputVal = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.id === 'name') {
			setNameAndPhoneVal(prev => ({
				...prev,
				name: e.target.value,
			}))
			setErrorStatus({
				status: null,
				message: null,
			})
		}
		if (e.target.id === 'phoneNumber') {
			setNameAndPhoneVal(prev => ({
				...prev,
				phoneNumber: e.target.value,
			}))
			setErrorStatus({
				status: null,
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
				<S.InputWrap>
					<Name_Icon />
					<Input placeholder="이름" id="name" onChange={onChangeInputVal} />
				</S.InputWrap>

				<S.InputWrap>
					<Phone_Icon />
					<Input
						placeholder="전화번호"
						maxlength="11"
						id="phoneNumber"
						onChange={onChangeInputVal}
					/>
				</S.InputWrap>
				<S.ErrorWrap>
					{errorStatus.status === 'error' && (
						<HookFormError>{errorStatus.message}</HookFormError>
					)}
				</S.ErrorWrap>
				<S.ButtonWrap>
					<Button type="button" onClick={onFindEmail}>
						이메일 찾기
					</Button>
				</S.ButtonWrap>
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

const S = { Wrapper, Box, InputWrap, TitleHead, ButtonWrap, ErrorWrap }
