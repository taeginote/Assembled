import styled from 'styled-components'
import {
	FlexAlignCSS,
	FlexBetweenCSS,
	FlexColumnCSS,
} from '../../../Styles/common'
import { Chat_Icon, Person_Icon, UserQuestion_Icon } from '../../../Icons/Icons'
import ProfileImgReturn from '../../../Utils/ProfileImgReturn'
import Button from '../../../Components/Button/Button'

import { Content } from '../../../Hooks/Queries/get-list'
import ActivityUserListModal from '../../../Components/Modal/ActivityUserListModal'
import Ballon from '../../../Components/Ballon/Ballon'

interface ActivityItemBoxProps {
	data: Content
	setMeetingId: (state: number) => void
	setUserListModal: (state: boolean) => void
	refetch?: () => void
}

function ActivityItemBox({
	data,
	setMeetingId,
	setUserListModal,
}: ActivityItemBoxProps) {
	const {
		meetingId,
		name,
		categoryName,
		writerProfileImages,
		writerNickname,
		activityUserCount,
		commentCount,
	} = data

	const onViewActivityUser = () => {
		setMeetingId(meetingId)
		setUserListModal(true)
		document.body.style.overflow = 'hidden'
	}

	const profileImg = ProfileImgReturn(writerProfileImages?.filePath)

	return (
		<S.Wrapper>
			<S.TopWrap>
				<S.Status>모집중</S.Status>
				<Button
					size="big"
					onClick={() => alert('모임 활동 페이지는 준비중입니다 :)')}
				>
					모임 활동
				</Button>
			</S.TopWrap>
			<S.Container>
				<S.Period>카테고리 | {categoryName}</S.Period>
				<S.Title>
					{name && name?.length > 45 ? name?.substr(0, 45) + '...' : name}
				</S.Title>
				{/* <S.Category>{categoryName}</S.Category> */}
			</S.Container>
			<S.UserBox>
				<div>
					<S.UserImg src={profileImg} alt="UserImage" />
					<div>{writerNickname}</div>
				</div>

				<span>
					<Person_Icon />
					<span>
						{activityUserCount}인
						<S.BallonWrap onClick={onViewActivityUser}>
							<UserQuestion_Icon />
							<div>
								<Ballon text={'멤버 구경'} />
							</div>
						</S.BallonWrap>
					</span>

					<Chat_Icon size={'20'} />
					<span>{commentCount}개</span>
				</span>
			</S.UserBox>
		</S.Wrapper>
	)
}
export default ActivityItemBox

const Wrapper = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	border: 2px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	padding: 3rem;
	border-radius: 2rem;
	width: 100%;
	min-width: 25rem;
	margin-bottom: 2rem;

	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		min-width: 100%;
		font-size: ${({ theme }) => theme.FONT_SIZE.ss};
	}
`
const Container = styled.div`
	${FlexColumnCSS}
	align-items: start;
	& > div {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		margin-top: 1rem;
		@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		}
	}
	border-bottom: 2px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	padding-bottom: 2rem;
`
const UserBox = styled.div`
	${FlexBetweenCSS}
	padding: 2rem 0 0 0;
	& > div {
		${FlexAlignCSS}
	}
	& > span {
		${FlexAlignCSS}

		@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			margin-top: 1rem;
			width: 100%;
			text-align: end;
			display: flex;
			justify-content: end;
		}
		& > span {
			${FlexAlignCSS}
		}
		* {
			margin-left: 0.5rem;
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
const Status = styled.span`
	background-color: ${({ theme }) => theme.COLOR.orange};
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	color: ${({ theme }) => theme.COLOR.hover};
	padding: 0.1rem 0.7rem;
	text-align: center;
	border-radius: 1rem;
`
const Category = styled.span`
	background-color: ${({ theme }) => theme.COLOR.common.gray[100]};
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	color: ${({ theme }) => theme.COLOR.common.gray[300]};
	padding: 0.1rem 0.7rem;
	text-align: center;
	border-radius: 1rem;
	margin-top: 2rem;
`
const Period = styled.div`
	color: ${({ theme }) => theme.COLOR.common.gray[300]};
	margin-top: 2rem;
`
const Title = styled.div`
	min-height: 8rem;
	max-height: 8rem;
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
`
const BallonWrap = styled.div`
	margin-right: 1rem;
	margin-top: 0.5rem;
	position: relative;

	& > div {
		display: none;
	}
	cursor: pointer;
	&:hover {
		& > div {
			display: block;
			@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
				display: none;
			}
		}
	}
`

const S = {
	Wrapper,
	Status,
	MainImgContainer,
	Period,
	Category,
	Container,
	UserBox,
	UserImg,
	Title,
	TopWrap,
	BallonWrap,
}
