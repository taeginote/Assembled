import styled from 'styled-components'
import {
	FlexAlignCSS,
	FlexBetweenCSS,
	FlexColumnCSS,
} from '../../Styles/common'
import { useNavigate } from 'react-router-dom'
import {
	Chat_Icon,
	FillHeart_Icon,
	NotFillHeart_Icon,
	View_Icon,
} from '../../Icons/Icons'
import { useMutation } from '@tanstack/react-query'
import { MeetingLikeProps } from '../../Types/apiType'
import MeetingLikeApi from '../../Apis/MeetingLikeApi'
import TokenService from '../../Utils/TokenService'
import ProfileImgReturn from '../../Utils/ProfileImgReturn'
import { Content } from '../../Hooks/Queries/get-list'

function ItemBox({ data, refetch }: { data: Content; refetch: () => void }) {
	const navigate = useNavigate()

	const token = TokenService.getAccessToken()

	const {
		meetingId,
		name,
		categoryName,
		writerProfileImages,
		writerNickname,
		commentCount,
		likeStatus,
		meetingStatus,
		hits,
	} = data

	const profileImg = ProfileImgReturn(writerProfileImages?.filePath)

	const { mutate } = useMutation(
		(likeData: MeetingLikeProps) => MeetingLikeApi.MeetingLike(likeData),
		{
			onSuccess: () => {
				refetch()
			},
		},
	)

	const { mutate: cancelMutate } = useMutation(
		(likeData: number) => MeetingLikeApi.CancelLike(likeData),
		{
			onSuccess: () => {
				refetch()
			},
		},
	)

	const onClickNotHeart = (event: MouseEvent): void => {
		event.stopPropagation()
		mutate({ meetingId })
	}
	const onClickFillHeart = (event: MouseEvent): void => {
		event.stopPropagation()
		cancelMutate(meetingId!)
	}

	return (
		<S.Wrapper onClick={() => navigate(`/Detail?meetingId=${meetingId}`)}>
			<S.TopWrap>
				{meetingStatus === 'PROGRESS' ? (
					<S.Status $state={true}>모집중</S.Status>
				) : (
					<S.Status $state={false}>모집완료</S.Status>
				)}
				{token && (
					<>
						{!likeStatus ? (
							<NotFillHeart_Icon onClick={onClickNotHeart} />
						) : (
							<FillHeart_Icon onClick={onClickFillHeart} />
						)}
					</>
				)}
			</S.TopWrap>
			<S.Container>
				<S.Title>
					{name && name?.length > 45 ? name?.substr(0, 45) + '...' : name}
				</S.Title>
				<S.Category>{categoryName}</S.Category>
			</S.Container>
			<S.UserBox>
				<div>
					<S.UserImg src={profileImg} alt="UserImage" />
					<div>
						{writerNickname && writerNickname?.length > 7
							? writerNickname?.substr(0, 7) + '...'
							: writerNickname}
					</div>
				</div>
				<span>
					<View_Icon />
					<span>{hits}</span>
					<Chat_Icon size={'20'} />
					<div>{commentCount}</div>
				</span>
			</S.UserBox>
		</S.Wrapper>
	)
}
export default ItemBox

const Wrapper = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	border: 2px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	padding: 3rem;
	border-radius: 2rem;
	cursor: pointer;
	width: 100%;
	min-width: 25rem;
	&:hover {
		transform: scale(1.01);
		transition: transform 0.2s;
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		min-width: 100%;
		font-size: ${({ theme }) => theme.FONT_SIZE.ss};
		padding: 1.5rem 1.5rem;
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
	padding: 2rem 0 0 0;

	& > div {
		${FlexAlignCSS}
		width: 100%;
	}

	& > span {
		@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			display: none;
		}
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
	z-index: 100;
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
}
