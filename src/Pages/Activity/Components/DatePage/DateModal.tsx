import { styled } from 'styled-components'
import { FlexBetweenCSS, FlexCenterCSS } from '../../../../Styles/common'
import { BigDateIcon, CancelbigIcon } from '../../../../Icons/Icons'
import Input from '../../../../Components/Input/Input'
import Button from '../../../../Components/Button/Button'

function DateModal({
	setState,
	selectDay,
}: {
	setState: (state: boolean) => void
	selectDay: string | null
}) {
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

				<S.TitleInput placeholder={'제목'} />
				<S.ContentTextarea placeholder={'내용'} />

				<Button size="big">일정 추가</Button>
			</S.Box>
		</S.Wrapper>
	)
}
export default DateModal

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
