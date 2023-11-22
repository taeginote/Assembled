import { styled } from 'styled-components'
import { FlexBetweenCSS, FlexCenterCSS } from '../../../../Styles/common'
import { BigDateIcon, CancelbigIcon } from '../../../../Icons/Icons'
import Input from '../../../../Components/Input/Input'
import Button from '../../../../Components/Button/Button'
import { useState } from 'react'
import ScheduleApi from '../../../../Apis/ScheduleApi'
import { PostScheduleType } from '../../../../Types/apiType'
import { useMutation } from '@tanstack/react-query'

export interface InputState {
	title: string
	content: string
}

function DatePostModal({
	setState,
	selectDay,
	meetingId,
}: {
	setState: (state: boolean) => void
	selectDay: string | null
	meetingId: number | null
}) {
	const [inputTitleAndContent, setInputTitleAndContent] = useState<InputState>({
		title: '',
		content: '',
	})

	const { mutate } = useMutation(
		(data: PostScheduleType) => ScheduleApi.PostSchedule(data),
		{
			onSuccess: () => {
				setState(false)
			},
			onError: () => {},
		},
	)

	const onInputTitleAndContent = (value: string, kind: 'title' | 'content') => {
		//onChange를 통해 useState값 넣고 제출버튼 누르면 title과 content 값 넣기 까지 하면 끝
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
	const onAddSchedule = () => {
		if (
			inputTitleAndContent.title.trim().length === 0 ||
			inputTitleAndContent.content.trim().length === 0
		)
			return

		const sendData = {
			title: inputTitleAndContent.title.trim()!,
			content: inputTitleAndContent.content.trim()!,
			date: selectDay!, //이거가 아직까지 2023년10월12일 이런 형식임 API나오면 수정 예정
			meetingId: meetingId!,
		}

		mutate(sendData)
	}
	return (
		<S.Wrapper>
			<S.Box>
				<S.TitleHead>
					<h4>일정 추가</h4>
					<div>
						<CancelbigIcon onClick={() => setState(false)} />
					</div>
				</S.TitleHead>
				<S.Day>
					<BigDateIcon />
					{selectDay}
				</S.Day>

				<S.TitleInput
					placeholder={'제목'}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						onInputTitleAndContent(e.target.value, 'title')
					}
				/>
				<S.ContentTextarea
					placeholder={'내용'}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
						onInputTitleAndContent(e.target.value, 'content')
					}
				/>

				<Button size="big" onClick={onAddSchedule}>
					일정 추가
				</Button>
			</S.Box>
		</S.Wrapper>
	)
}
export default DatePostModal

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
	&>div {
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
const Day = styled.div`
	padding: 1rem 2rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	text-align: start;
	display: flex;
	align-items: center;
	* {
		padding-right: 1rem;
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
	min-height: 30rem;
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
const S = { Wrapper, TitleHead, Box, Day, TitleInput, ContentTextarea }
