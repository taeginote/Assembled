import styled from 'styled-components'
import {
	ColumnNumberCSS,
	FlexColumnCSS,
	GridCenterCSS,
	TopPadding,
	WidthAutoCSS,
} from '../../Styles/common'
import { selectDataTeamMember } from './Components/SelectBox/SelectData'
import { selectDataPeriod } from './Components/SelectBox/SelectData'
import { useRecoilState } from 'recoil'
import ConfirmModal from '../../Components/Modal/confirmModal'
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from 'react-hook-form'
import HookFormError from '../../Components/Error/HookFormError'
import Button from '../../Components/Button/Button'
import SelectInput from './Components/SelectBox/SelectInput'
import { useMutation } from '@tanstack/react-query'

import SuccessModal from '../../Components/Modal/successModal'
import { modalViewConfirm } from '../../Atoms/modalViewConfirm.atom'
import PostApi from '../../Apis/PostApi'
import { PostRegisterData } from '../../Types/apiType'
import useGetCategoryData from '../../Hooks/Queries/get-category'
import UserIdService from '../../Utils/UserIdService'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useGetDetailData from '../../Hooks/Queries/get-detail'

type CategoryName = { categoryName: 'string' }

function Register() {
	const [recoilCounter, setRecoilCounter] = useRecoilState(modalViewConfirm)
	const { postId } = useParams()
	const [modalView, setModalView] = useState(false)

	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm()
	const { data: GetCategoryData } = useGetCategoryData()

	const { data, isLoading, refetch } = useGetDetailData(Number(postId))

	const { mutate } = useMutation(
		(data: PostRegisterData) => PostApi.PostRegister(data),
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
			(el: CategoryName) => el.categoryName === e.Category,
		)

		const data: PostRegisterData = {
			title: e.Title,
			contents: e.Contents,
			categoryId: categoryId.categoryId,
			writer,
			personnelNumber: e.TeamMember,
			expectedPeriod: e.Period,
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
						Data={GetCategoryData?.response}
						control={control}
						errorMsg="카테고리를 선택해주세요."
						datailData={data?.response?.categoryName}
						postId={postId}
					/>
				</S.Box>
				<S.Box>
					<div>인원 수 *</div>
					<SelectInput
						name="TeamMember"
						Data={selectDataTeamMember}
						control={control}
						errorMsg="인원수를 선택해주세요."
						datailData={data?.response?.perssonelNumber}
						postId={postId}
					/>
				</S.Box>
				<S.Box>
					<div>총 진행 예정 달 *</div>
					<SelectInput
						name="Period"
						Data={selectDataPeriod}
						control={control}
						errorMsg="프로젝트 기간을 선택해주세요."
						datailData={data?.response?.expectedPeriod}
						postId={postId}
					/>
				</S.Box>
			</S.Container>

			<S.Box>
				<div>제목 *</div>
				<Controller
					name={'Title'}
					control={control}
					rules={{
						required: '제목을 입력해주세요',
					}}
					render={({ field }) => (
						<S.Input
							placeholder="제목을 입력해 주세요"
							status={field.value === undefined}
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
						required: '설명을 입력해 주세요',
					}}
					defaultValue={data && data?.response?.contents}
					render={({ field }) => (
						<textarea
							placeholder="설명을 입력해 주세요"
							// status={field.value === undefined}
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
		margin-top: 3rem;
		display: flex;
		justify-content: end;
		* {
			margin-left: 1rem;
		}
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		padding-top: 10rem;
	}
`
const Container = styled.div`
	${GridCenterCSS}
	${ColumnNumberCSS(2)}
`
const Title = styled.h3`
	margin-bottom: 3rem;
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
		min-height: 17rem;
		resize: none;
		:focus {
			border: 1.5px solid ${({ theme }) => theme.COLOR.sub};
		}
	}
`
const Input = styled.input<{ status: boolean }>`
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	width: 100%;
	margin-bottom: 0.5rem;
	padding: 1.3rem 1rem;
	border-radius: 0.5rem;
	border: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};
	color: ${({ theme, status }) =>
		status ? theme.COLOR.common.gray[200] : 'black'};
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

const S = {
	Container,
	Wrapper,
	Title,
	Box,
	DivBtn,
	DivBtn1,
	Input,
}
