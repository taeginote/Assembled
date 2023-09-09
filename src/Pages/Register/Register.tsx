import styled from 'styled-components'
import {
	ColumnNumberCSS,
	FlexAlignCSS,
	FlexColumnCSS,
	GridCenterCSS,
	TopPadding,
	WidthAutoCSS,
} from '../../Styles/common'

import { useRecoilState } from 'recoil'
import ConfirmModal from '../../Components/Modal/confirmModal'
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from 'react-hook-form'
import HookFormError from '../../Error/HookFormError'
import Button from '../../Components/Button/Button'
import SelectInput from './Components/SelectBox/SelectInput'
import { useMutation } from '@tanstack/react-query'

import SuccessModal from '../../Components/Modal/successModal'
import { modalViewConfirm } from '../../Atoms/modalViewConfirm.atom'
import MeetingApi from '../../Apis/MeetingApi'
import { MeetingRegisterProps } from '../../Types/apiType'
import useGetCategoryData from '../../Hooks/Queries/get-category'
import UserIdService from '../../Utils/UserIdService'
import { useEffect, useState } from 'react'
import { Category } from '../List/Components/CategoryNav/CategoryNav'
import DaumPostAddress from '../../Components/Map/DaumPostAddress'

export interface ResultAddressType {
	zipCode: number
	roadNameAddress: string
	lotNumberAddress: string
	detailAddress: string
}

function Register() {
	const [recoilCounter, setRecoilCounter] = useRecoilState(modalViewConfirm)
	const [modalView, setModalView] = useState(false)
	const [mapModalView, setMapModalView] = useState(false)
	const [resultAddress, setResultAddress] = useState<null | ResultAddressType>(
		null,
	)

	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm()
	const { data: GetCategoryData } = useGetCategoryData()

	if (resultAddress) {
		setValue('Address', resultAddress)
	}

	const { mutate } = useMutation(
		(data: MeetingRegisterProps) => MeetingApi.MeetingRegister(data),
		{
			onSuccess: () => {
				setModalView(true)
			},
			onError: () => {},
		},
	)

	const onSubmit: SubmitHandler<FieldValues> = e => {
		const writer = UserIdService.getUserId()

		let categoryId = GetCategoryData?.response.find(
			(el: Category) => el.categoryName === e.Category,
		)

		const data: MeetingRegisterProps = {
			name: e.Title,
			description: e.Contents,
			categoryId: categoryId!.categoryId,
			...resultAddress,
		}

		mutate(data)
	}

	return (
		<S.Wrapper onSubmit={handleSubmit(onSubmit)}>
			<S.Title>여러분이 원하는 모임 혹은 동아리를 만드세요</S.Title>
			<S.Container>
				<S.Box>
					<div>카테고리 *</div>
					<SelectInput
						name="Category"
						Data={GetCategoryData! && GetCategoryData!.response}
						control={control}
						errorMsg="카테고리를 선택해주세요."
					/>
				</S.Box>
			</S.Container>
			<S.MapWrap>
				<div>모임 활동 지역 *</div>
				<S.MapBox>
					<Input
						placeholder="모임활동 지역을 선택해주세요"
						value={resultAddress ? resultAddress.detailAddress! : ''}
						{...register('Address', {
							required: '모임활동 지역을 선택해주세요',
						})}
					/>
					<S.StyleButton type="button" onClick={() => setMapModalView(true)}>
						주소찾기
					</S.StyleButton>
				</S.MapBox>
				{errors.Address && (
					<HookFormError>{errors.Address?.message?.toString()}</HookFormError>
				)}
			</S.MapWrap>
			<S.Box>
				<div>모임 이름 *</div>
				<Controller
					name={'Title'}
					control={control}
					rules={{
						required: '정하고싶은 모임의 이름을 입력해주세요',
					}}
					render={({ field }) => (
						<S.Input
							placeholder="정하고싶은 모임의 이름을 입력해주세요"
							value={field.value}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								field.onChange(e.target.value)
							}
						/>
					)}
				></Controller>
				{errors.Title && (
					<HookFormError>{errors.Title?.message?.toString()}</HookFormError>
				)}
			</S.Box>
			<S.Box>
				<div>모임에 대한 설명 *</div>
				<Controller
					name={'Contents'}
					control={control}
					rules={{
						required: '모임에 대한 설명을 입력해 주세요',
					}}
					render={({ field }) => (
						<textarea
							placeholder="모임에 대한 설명을 입력해 주세요"
							value={field.value}
							onChange={e => field.onChange(e.target.value)}
						/>
					)}
				></Controller>
				{errors.Contents && (
					<HookFormError>{errors.Contents?.message?.toString()}</HookFormError>
				)}
			</S.Box>

			<span>
				<Button type="submit" size={'normal'}>
					확인
				</Button>
				<Button
					type="button"
					size={'normal'}
					variant={'default-white'}
					onClick={() => setRecoilCounter(true)}
				>
					취소
				</Button>
			</span>
			{recoilCounter && <ConfirmModal text={'등록을 취소하시겠습니까?'} />}
			{modalView && <SuccessModal text={'등록 성공'} setState={setModalView} />}
			{mapModalView && (
				<DaumPostAddress
					setModalView={setMapModalView}
					setResultModal={setResultAddress}
				/>
			)}
		</S.Wrapper>
	)
}

export default Register

const Wrapper = styled.form`
	${TopPadding}
	${WidthAutoCSS}
	${FlexColumnCSS}
	padding-top: 17rem;
	& > div {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		margin-top: 3rem;
		margin-bottom: 0.5rem;
	}
	& > span {
		text-align: end;
		margin: 3rem 0;
		display: flex;
		justify-content: end;
		* {
			margin-left: 1rem;
		}
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		padding-top: 10rem;
		margin-bottom: 3rem;
	}
`
const Container = styled.div`
	${GridCenterCSS}
	${ColumnNumberCSS(2)}
`
const Title = styled.h3`
	margin-bottom: 3rem;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	}
`
const Box = styled.div`
	width: 100%;
	position: relative;
	margin-bottom: 2rem;
	& > span {
		position: absolute;
		top: 8.5rem;
		* {
			font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		}
	}
	& > div {
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		margin-bottom: 1rem;
	}

	& > textarea {
		width: 100%;
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		outline: none;
		padding: 1.3rem 1rem;
		border: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};
		border-radius: 0.5rem;
		min-height: 27rem;
		resize: none;
		:focus {
			border: 1.5px solid ${({ theme }) => theme.COLOR.sub};
		}
	}
`
const Input = styled.input`
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	width: 100%;
	margin-bottom: 0.5rem;
	padding: 1.3rem 1rem;
	border-radius: 0.5rem;
	border: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};

	:focus {
		border: 1px solid ${({ theme }) => theme.COLOR.sub};
	}
`
const DivBtn = styled.div`
	text-align: center;
	padding-top: 0.5rem;
	color: white;
	border-radius: 0.4rem;
	cursor: pointer;
	width: 6rem;
	height: 3.8rem;
	background-color: ${({ theme }) => theme.COLOR.main};
	&:hover {
		background-color: ${({ theme }) => theme.COLOR.hover};
		transition: all 0.3s ease-in-out;
	}
	&:disabled {
		background-color: ${({ theme }) => theme.COLOR.common.gray[200]};
	}
`
const DivBtn1 = styled.div`
	text-align: center;
	padding-top: 0.5rem;
	color: ${({ theme }) => theme.COLOR.button};
	border-radius: 0.4rem;
	cursor: pointer;
	width: 6rem;
	height: 3.8rem;
	border: 1px solid ${({ theme }) => theme.COLOR.common.gray[300]};
	&:hover {
		transition: all 0.3s ease-in-out;
		opacity: 0.4;
	}
`
const MapWrap = styled.div`
	width: 50%;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 100%;
	}
`
const StyleButton = styled(Button)`
	width: 20%;
`
const MapBox = styled.div`
	margin-top: 1rem;
	${FlexAlignCSS}
	align-items: start;
`
const S = {
	Container,
	Wrapper,
	Title,
	Box,
	DivBtn,
	DivBtn1,
	Input,
	MapBox,
	MapWrap,
	StyleButton,
}
