import { styled } from 'styled-components'
import { FlexBetweenCSS, FlexCenterCSS } from '../../../../Styles/common'
import { CancelbigIcon } from '../../../../Icons/Icons'
import useGetDetailScheduleData from '../../../../Hooks/Queries/get-DetailSchedule'
import Button from '../../../../Components/Button/Button'
import ScheduleApi from '../../../../Apis/ScheduleApi'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import Input from '../../../../Components/Input/Input'
import { InputState } from './DatePostModal'
import { PostScheduleType, putScheduleType } from '../../../../Types/apiType'

function DateDetailModal({
	setState,
	selectDay,
	selectDetailId,
	setSelectDetailId,
}: {
	setState: (state: boolean) => void
	selectDay: string | null
	selectDetailId: number | null
	setSelectDetailId: (state: number | null) => void
}) {
	const queryClient = useQueryClient()
	const [isChange, setIsChange] = useState<boolean>(false)
	const [inputTitleAndContent, setInputTitleAndContent] = useState<InputState>({
		title: '',
		content: '',
	})

	const { data, isLoading, refetch } = useGetDetailScheduleData(selectDetailId!)

	const { mutate } = useMutation(
		(selectDetailId: number) => ScheduleApi.deleteSchedule(selectDetailId),
		{
			onSuccess: () => {
				setState(false)
				queryClient.invalidateQueries([
					'useGetMonthScheduleListData',
					selectDay?.slice(0, 7),
				])
			},
			onError: () => {},
		},
	)

	const { mutate: putMutate } = useMutation(
		(content: putScheduleType) => ScheduleApi.putSchedule(content),
		{
			onSuccess: () => {
				refetch()
				setIsChange(false)
				queryClient.invalidateQueries([
					'useGetMonthScheduleListData',
					selectDay?.slice(0, 7),
				])
			},
			onError: () => {},
		},
	)

	const onClose = () => {
		setState(false)
		setSelectDetailId(null)
		setInputTitleAndContent({
			title: '',
			content: '',
		})
	}
	const onDelete = () => {
		mutate(selectDetailId!)
		setInputTitleAndContent({
			title: '',
			content: '',
		})
	}
	const onClickChange = (value: string) => {
		if (value === '수정') {
			setIsChange(true)
			setInputTitleAndContent({
				title: data?.response?.title!,
				content: data?.response?.content!,
			})
		}
		if (value === '완료') {
			if (
				inputTitleAndContent.title.trim().length === 0 ||
				inputTitleAndContent.content.trim().length === 0
			)
				return

			const sendData = {
				title: inputTitleAndContent.title.trim()!,
				content: inputTitleAndContent.content.trim()!,
				id: selectDetailId!, //이거가 아직까지 2023년10월12일 이런 형식임 API나오면 수정 예정
			}
			putMutate(sendData)
		}
	}
	const onInputTitleAndContent = (value: string, kind: 'title' | 'content') => {
		if (kind === 'title')
			return setInputTitleAndContent((prev: InputState) => ({
				...prev,
				title: value,
			}))
		if (kind === 'content')
			return setInputTitleAndContent((prev: InputState) => ({
				...prev,
				content: value,
			}))
	}
	return (
		<S.Wrapper>
			<S.Box>
				<S.TitleHead>
					<h4>{selectDay}</h4>
					<div>
						<CancelbigIcon onClick={onClose} />
					</div>
				</S.TitleHead>
				{isChange ? (
					<>
						<S.TitleInput
							placeholder={'제목'}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								onInputTitleAndContent(e.target.value, 'title')
							}
							value={inputTitleAndContent.title}
						/>
						<S.ContentTextarea
							placeholder={'내용'}
							onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
								onInputTitleAndContent(e.target.value, 'content')
							}
							value={inputTitleAndContent.content}
						/>
					</>
				) : (
					<>
						<S.Title>{data?.response?.title}</S.Title>
						<S.Content>{data?.response?.content}</S.Content>
					</>
				)}

				<S.ButtonWrapper>
					{isChange ? (
						<Button size="normal" onClick={() => onClickChange('완료')}>
							완료
						</Button>
					) : (
						<Button size="normal" onClick={() => onClickChange('수정')}>
							수정
						</Button>
					)}
					<Button size="normal" variant="default-white" onClick={onDelete}>
						삭제
					</Button>
				</S.ButtonWrapper>
			</S.Box>
		</S.Wrapper>
	)
}
export default DateDetailModal

const Wrapper = styled.div`
	position: fixed;
	top: -3rem;
	left: 0;
	height: 200vh;
	width: 100%;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.4);
	${FlexCenterCSS}
`
const TitleHead = styled.div`
	margin: 0 2rem;
	${FlexBetweenCSS}

	& > div {
		cursor: pointer;
	}
`
const Box = styled.div`
	width: 45rem;
	padding: 1rem 0;
	text-align: center;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.COLOR.common.white};
	& > span {
		* {
			margin: 0 1rem;
		}
	}
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
			top: 25%;
		}
	}
	padding-bottom: 2rem;
`
const Title = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	margin: 1rem 2rem 0 2rem;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	text-align: start;
`
const Content = styled.div`
	margin: 2rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	text-align: start;
	min-height: 10rem;
`
const ButtonWrapper = styled.div`
	text-align: end;
	margin: 0 2rem;
	* {
		margin-left: 1rem;
	}
`
const TitleInput = styled(Input)`
	border-bottom: 1px solid gray;
	width: 90%;
	&:focus {
		border-bottom: 2px solid ${({ theme }) => theme.COLOR.sub};
	}
`
const ContentTextarea = styled.textarea`
	margin: 2rem 0;
	width: 90%;
	min-height: 15rem;
	white-space: pre-wrap;
	resize: none;
	border-radius: 0.3rem;
	word-wrap: break-word;
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	padding: 1.5rem;
	&:focus {
		border: none;
		outline: 2px solid ${({ theme }) => theme.COLOR.sub};
	}
`
const S = {
	Wrapper,
	TitleHead,
	Box,
	Title,
	Content,
	ButtonWrapper,
	TitleInput,
	ContentTextarea,
}
