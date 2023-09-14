import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {
	FlexAlignCSS,
	FlexBetweenCSS,
	FlexColumnCSS,
} from '../../../Styles/common'
import {
	Chat_Icon,
	Pen_Icon,
	Person_Icon,
	Trash_Icon,
} from '../../../Icons/Icons'

import Ballon from '../../../Components/Ballon/Ballon'
import { modalViewConfirm } from '../../../Atoms/modalViewConfirm.atom'
import { useSetRecoilState } from 'recoil'
import ProfileImgReturn from '../../../Utils/ProfileImgReturn'
import { Content } from '../../../Hooks/Queries/get-list'
import Button from '../../../Components/Button/Button'
import { GroupJoinStatusModalProps } from '../Pages/Wrote'

function ItemBoxMyPage({
	data,
	setState,
	setMeetingId,
}: {
	data: Content
	setState: (state: GroupJoinStatusModalProps) => void | undefined
	setMeetingId: React.Dispatch<React.SetStateAction<number>>
}) {
	const navigate = useNavigate()
	const {
		meetingId,
		name,
		categoryName,
		// profile,
		writerNickname,
		activityUserCount,

		commentCount,
		writerProfileImages,
		meetingStatus,
	} = data

	const profileImg = ProfileImgReturn(writerProfileImages?.filePath)

	const setRecoilCounter = useSetRecoilState(modalViewConfirm)

	const onDeleteClub = (e?: number) => {
		setRecoilCounter(true)
		setMeetingId(e!)
	}

	const onGroupJoinStatus = () => {
		setState({
			view: true,
			Id: meetingId,
		})
		document.body.style.overflow = 'hidden'
	}

	return (
		<S.Wrapper>
			<S.TopWrap>
				{meetingStatus === 'PROGRESS' ? (
					<S.Status $state={true}>모집중</S.Status>
				) : (
					<S.Status $state={false}>모집완료</S.Status>
				)}
				<p>
					<button
						onClick={() => navigate(`/register/${meetingId}`)}
						title="Modify"
					>
						<div>
							<Ballon text={'모임 수정'} />
						</div>
						<Pen_Icon />
					</button>
					<button onClick={() => onDeleteClub(meetingId)} title="Delete">
						<div>
							<Ballon text={'모임 삭제'} />
						</div>
						<Trash_Icon />
					</button>
				</p>
			</S.TopWrap>

			<S.Container>
				<S.ContainerLeft
					onClick={() => navigate(`/Detail?meetingId=${meetingId}`)}
				>
					<S.Title>
						{name && name?.length > 45 ? name?.substr(0, 45) + '...' : name}
					</S.Title>
					<S.Category>{categoryName}</S.Category>
				</S.ContainerLeft>
			</S.Container>
			<S.UserBox>
				<div>
					<S.UserImg src={profileImg} alt="UserImage" />
					<div>
						{writerNickname && writerNickname?.length > 10
							? writerNickname?.substr(0, 10) + '...'
							: writerNickname}
					</div>
				</div>
				<span>
					<Person_Icon />
					<span>{activityUserCount}인</span>
					<Chat_Icon size={'20'} />
					<div>{commentCount}개</div>
				</span>
			</S.UserBox>
			<S.MobileBtnWrap>
				<Button onClick={() => alert('모임 활동 페이지는 준비중입니다 :)')}>
					모임 활동
				</Button>
				<Button onClick={onGroupJoinStatus} variant="default-white">
					신청 현황
				</Button>
			</S.MobileBtnWrap>
		</S.Wrapper>
	)
}
export default ItemBoxMyPage

const Wrapper = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	border: 2px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	padding: 3rem;
	border-radius: 2rem;
	width: 100%;
	min-width: 18rem;
	margin-bottom: 5rem;
`
const Container = styled.div`
	border-bottom: 2px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	padding-bottom: 2rem;
`
const ContainerLeft = styled.div`
	${FlexColumnCSS}
	align-items: start;
	width: 100%;
	& > div {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		margin: 1rem 0;
		@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			font-size: ${({ theme }) => theme.FONT_SIZE.xs};
			text-align: start;
		}
	}
	cursor: pointer;
`

const MobileBtnWrap = styled.div`
	display: flex;
	* {
		margin: 2rem 5rem 0 5rem;
		@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			margin: 2rem 2rem 0 2rem;
		}
	}
`

const UserBox = styled.div`
	${FlexBetweenCSS}
	padding: 2rem 0 0 0;

	& > div {
		${FlexAlignCSS}
	}
	& > span {
		/* @media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			display: none;
		} */
		${FlexAlignCSS}
		span {
			margin-right: 1rem;
		}
		* {
			margin-right: 0.5rem;
			opacity: 0.7;
		}
	}
`
const MainImgContainer = styled.div`
	${FlexAlignCSS}
	height: 30rem;
	& > div {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	}
`
const Status = styled.span<{ $state: boolean }>`
	background-color: ${({ theme, $state }) =>
		$state ? theme.COLOR.orange : theme.COLOR.common.gray[100]};
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	color: ${({ theme, $state }) =>
		$state ? theme.COLOR.hover : theme.COLOR.common.gray[200]};
	padding: 0.1rem 0.7rem;
	text-align: center;
	border-radius: 1rem;
`
const Category = styled.span`
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	color: #fb9b00;
	background-color: #fff3e0;
	padding: 0.1rem 0.7rem;
	text-align: center;
	border-radius: 1rem;
	margin-top: 2rem;
`

const Title = styled.div`
	min-height: 8rem;
	max-height: 8rem;
	text-align: start;
`
const UserImg = styled.img`
	border-radius: 50%;
	width: 3.2rem;
	height: 3.2rem;
	margin-right: 0.5rem;
`
const TopWrap = styled.div`
	width: 100%;
	${FlexBetweenCSS}
	&>p {
		width: 10%;
		${FlexBetweenCSS}
		@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			width: 15%;
		}
		& > button {
			background-color: white;
			position: relative;
			& > div {
				display: none;
			}
			@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
				margin-right: 1.3rem;
			}
		}
		& > button:hover {
			scale: 1.1;
			& > div {
				display: block;
			}
		}
	}
`

const S = {
	Wrapper,
	Status,
	MainImgContainer,

	Category,
	Container,
	UserBox,
	UserImg,
	Title,
	TopWrap,
	ContainerLeft,

	MobileBtnWrap,
}
