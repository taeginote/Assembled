import styled from 'styled-components'
import { ColumnNumberCSS, FlexAlignCSS, TopPadding } from '../../Styles/common'
import useGetDetailData from '../../Hooks/Queries/get-detail'
import LoadingPage from '../../Components/Spinner/Spinner'
import CommentForm from './Components/CommentForm'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ProfileImgReturn from '../../Utils/ProfileImgReturn'
import {
	FillHeartIcon,
	NotFillHeartIcon,
	PenIcon,
	TrashIcon,
	UserQuestionIcon,
} from '../../Icons/Icons'
import Ballon from '../../Components/Ballon/Ballon'
import MeetingApi from '../../Apis/MeetingApi'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import ConfirmModal from '../../Components/Modal/confirmModal'
import { modalViewConfirm } from '../../Atoms/modalViewConfirm.atom'
import { useRecoilState } from 'recoil'
import { MeetingLikeProps, meetingJoinProps } from '../../Types/apiType'
import MeetingLikeApi from '../../Apis/MeetingLikeApi'
import UserIdService from '../../Utils/UserIdService'
import { FlexCenterCSS } from '../../Styles/common'
import TokenService from '../../Utils/TokenService'
import Button from '../../Components/Button/Button'
import { FlexColumnCSS } from '../../Styles/common'
import JoinModal from '../../Components/Modal/joinModal'
import { useState } from 'react'
import JoinApi from '../../Apis/JoinApi'
import ActivityUserListModal from '../../Components/Modal/ActivityUserListModal'

function Detail() {
	const navigate = useNavigate()
	const queryClient = useQueryClient()
	const token = TokenService.getAccessToken()

	const [searchParams] = useSearchParams()
	const [joinModal, setJoinModal] = useState(false)
	const [userListModal, setUserListModal] = useState(false)
	const [recoilCounter, setRecoilCounter] =
		useRecoilState<boolean>(modalViewConfirm)

	const UserId = UserIdService.getUserId()
	let meetingId: number | null = Number(searchParams.get('meetingId'))

	const { data, isLoading, refetch } = useGetDetailData(meetingId)

	const profileImg = ProfileImgReturn(
		data?.response?.writerProfileImages?.filePath,
	)
	console.log(profileImg)
	const IsMinePage = data?.response?.writerId == UserId ? true : false

	const { mutate } = useMutation(
		(meetingId: number) => MeetingApi.DeleteMeeting(meetingId),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['useGetListData'])
			},
			onError: () => {},
		},
	)
	const { mutate: heartMutate } = useMutation(
		(likeData: MeetingLikeProps) => MeetingLikeApi.MeetingLike(likeData),
		{
			onSuccess: () => {
				refetch()
			},
		},
	)

	const { mutate: cancelMutate } = useMutation(
		(meetingId: number) => MeetingLikeApi.CancelLike(meetingId),
		{
			onSuccess: () => {
				refetch()
			},
		},
	)

	const { mutate: meetingJoin } = useMutation(
		(data: meetingJoinProps) => JoinApi.meetingJoin(data),
		{
			onSuccess: () => {
				refetch()
			},
		},
	)
	const { mutate: meetingJoinCancel } = useMutation(
		(meetingId: number) => JoinApi.putmeetingJoinCancel(meetingId),
		{
			onSuccess: () => {
				refetch()
			},
		},
	)

	const onHeart = () => {
		if (token === null) return
		heartMutate({ meetingId })
	}

	const onDeleteClub = () => {
		setRecoilCounter(true)
	}

	const onClickJoinBtn = () => {
		setJoinModal(true)
		document.body.style.overflow = 'hidden'
	}

	const onJoinMeeting = (e: any) => {
		setJoinModal(false)
		document.body.style.overflow = 'auto'
		meetingJoin({
			joinRequestMessage:
				e.target.textarea.value.trim().length === 0
					? '안녕하세요~ 잘 부탁드립니다~😀'
					: e.target.textarea.value,
			meetingId: meetingId!,
		})
	}

	const onClickJoinCancel = () => {
		setJoinModal(false)
		document.body.style.overflow = 'auto'
	}
	const onActivityUserList = () => {
		setUserListModal(true)
		document.body.style.overflow = 'hidden'
	}

	return (
		<S.Wrapper>
			{isLoading ? (
				<LoadingPage />
			) : (
				<>
					<S.Container>
						<S.Top>
							<span>
								<h1>반가워요.</h1>
								<h1>우리는 "{data?.response?.name}" 입니다</h1>
								<S.Profile>
									<S.UserImg
										src={data?.response?.writerProfileImages?.filePath}
										alt="ProfileImage"
									/>
									<div>{data?.response?.writerNickname}</div>
								</S.Profile>
							</span>
							<>
								<S.TopRight>
									{IsMinePage && (
										<p>
											<button
												title="Modify"
												onClick={() => navigate(`/register/${meetingId}`)}
											>
												<div>
													<Ballon text={'모임 수정'} />
												</div>
												<PenIcon />
											</button>
											<button title="Delete" onClick={onDeleteClub}>
												<div>
													<Ballon text={'모임 삭제'} />
												</div>
												<TrashIcon />
											</button>
										</p>
									)}
									{token?.length !== 0 && (
										<div>
											<S.JoinButton
												size="big"
												onClick={onClickJoinBtn}
												disabled={data?.response?.activity}
											>
												{data?.response?.activity ? '가입 중' : '가입 신청'}
											</S.JoinButton>
											<S.WebkHeartBox>
												{!data?.response?.likeStatus ? (
													<NotFillHeartIcon onClick={onHeart} />
												) : (
													<FillHeartIcon
														onClick={() => cancelMutate(meetingId!)}
													/>
												)}
												<div>{data?.response?.likes}</div>
											</S.WebkHeartBox>
										</div>
									)}
								</S.TopRight>
							</>
						</S.Top>
						<S.Info>
							<div>
								<div>설립일</div>
								<span>{data?.response?.createdTime.split('T')[0]}</span>
							</div>
							<div>
								<div>카테고리</div>
								<span>{data?.response?.categoryName}</span>
							</div>
							<div>
								<div>활동 인원</div>
								<S.ActivityUserSpan onClick={onActivityUserList}>
									{data?.response?.activityUserCount === 0
										? '제한없음'
										: data?.response?.activityUserCount + '명'}
									<UserQuestionIcon />
									<div>
										<Ballon text={'멤버 구경'} />
									</div>
								</S.ActivityUserSpan>
							</div>
							<div>
								<div>활동지역</div>
								<span>{data?.response?.address}</span>
							</div>
						</S.Info>
						<h3>모임 설명</h3>
						<S.Dec>{data?.response?.description}</S.Dec>
						{data && (
							<CommentForm
								comments={data?.response?.comments}
								meetingId={meetingId}
								refetch={refetch}
								token={token}
							/>
						)}

						{token?.length !== 0 && (
							<S.FloatBox>
								{!data?.response?.likeStatus ? (
									<S.HeartBox onClick={onHeart}>
										<NotFillHeartIcon />
										<div>{data?.response?.likes}</div>
									</S.HeartBox>
								) : (
									<S.HeartBox onClick={() => cancelMutate(meetingId!)}>
										<FillHeartIcon />
										<div>{data?.response?.likes}</div>
									</S.HeartBox>
								)}
								{data?.response?.joinRequest ? (
									<S.JoinButton
										onClick={() => meetingJoinCancel(data?.response?.meetingId)}
										variant="default-white"
									>
										신청 취소
									</S.JoinButton>
								) : (
									<S.JoinButton
										onClick={onClickJoinBtn}
										$status={true}
										disabled={data?.response?.activity}
									>
										{data?.response?.activity ? '가입 중' : '가입 신청'}
									</S.JoinButton>
								)}
							</S.FloatBox>
						)}
					</S.Container>
				</>
			)}
			{recoilCounter && (
				<ConfirmModal
					text={'정말로 삭제하시겠습니까?'}
					url={'/'}
					mutate={mutate}
					meetingId={meetingId}
				/>
			)}
			{joinModal && (
				<JoinModal>
					<S.JoinModalWrap onSubmit={onJoinMeeting}>
						<S.JoinText
							id="textarea"
							placeholder="작성하지 않으면 아래와 같은 멘트로 보내드려요&#13;&#10;( 안녕하세요~ 잘 부탁드립니다~😀 )"
						></S.JoinText>
						<S.ButtonWrap>
							<Button>가입 신청</Button>
							<Button variant="default-white" onClick={onClickJoinCancel}>
								취소
							</Button>
						</S.ButtonWrap>
					</S.JoinModalWrap>
				</JoinModal>
			)}
			{userListModal && (
				<ActivityUserListModal
					meetingId={meetingId}
					setState={setUserListModal}
				/>
			)}
		</S.Wrapper>
	)
}
export default Detail

const Wrapper = styled.div`
	${TopPadding}
	width: 100%;
`
const Container = styled.div`
	width: 50%;
	margin: 0 auto;
	margin-top: 7rem;
	margin-bottom: 10rem;
	position: relative;
	& > h1 {
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
		margin-bottom: 3rem;
	}
	& > h3 {
		padding-bottom: 2rem;
		font-size: 3rem;

		border-bottom: 3px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
		width: 60%;
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 90%;
	}
`
const HeartBox = styled.div`
	border: 1px solid ${({ theme }) => theme.COLOR.common.gray[300]};
	border-radius: 1rem;
	width: 10rem;
	height: 5rem;
	box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
	${FlexCenterCSS}
	& > div {
		margin-left: 0.5rem;
		font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
		color: ${({ theme }) => theme.COLOR.common.gray[200]};
	}
	cursor: pointer;
`
const JoinButton = styled(Button)<{ $status?: true }>`
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	margin-top: 1rem;
	border: 1px solid
		${({ theme, $status }) => ($status ? 'none' : theme.COLOR.common.gray[400])};
	border-radius: 1rem;
	height: 5rem;
`
const FloatBox = styled.div`
	position: fixed;
	top: 45%;
	right: 15%;
	${FlexColumnCSS}
	align-items: center;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		display: none;
	}
`
const Profile = styled.div`
	${FlexAlignCSS}
	* {
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	}
	color: ${({ theme }) => theme.COLOR.common.gray[200]};
	div {
		color: ${({ theme }) => theme.COLOR.common.black};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
	padding: 4rem 0;
`
const Top = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 3px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	width: 100%;

	& > span {
		& > h1 {
			@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
				font-size: ${({ theme }) => theme.FONT_SIZE.large};
			}
		}
	}
`
const TopRight = styled.div`
	margin-right: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: end;
	margin-bottom: 3.5rem;
	align-items: end;

	& > p {
		margin: 2rem 0 5rem 0;
		@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			margin: 0 0 3rem 0;
		}
		& > button {
			background-color: white;
			position: relative;
			& > div {
				display: none;
			}
			margin-left: 2rem;
		}
		& > button:hover {
			scale: 1.1;
			& > div {
				display: block;
			}
		}
	}
	& > div {
		display: none;

		@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			display: flex;
			align-items: center;
		}
	}
`
const WebkHeartBox = styled.div`
	display: none;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
		display: flex;
		align-items: center;
		margin-top: 0.5rem;
		margin-left: 1rem;
		& > div {
			margin-left: 0.5rem;
			font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
			color: ${({ theme }) => theme.COLOR.common.gray[200]};
		}
	}
	cursor: pointer;
`
const UserImg = styled.img`
	border-radius: 50%;
	width: 4rem;
	height: 4rem;
	margin-right: 2rem;
`
const Info = styled.div`
	font-size: 2rem;
	margin: 3rem 0 7rem 0;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	display: grid;
	align-items: center;
	${ColumnNumberCSS(2)}
	@media screen and (max-width: 1240px) {
		${ColumnNumberCSS(1)}
	}
	& > div {
		display: grid;
		align-items: center;
		${ColumnNumberCSS(10)}
		& > div {
			color: ${({ theme }) => theme.COLOR.common.gray[200]};
			grid-column-start: 1;
			grid-column-end: 4;
		}
		& > span {
			grid-column-start: 4;
			grid-column-end: 11;
			font-size: 2rem;
			font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
			display: flex;
			align-items: center;
		}
	}
`
const ActivityUserSpan = styled.span`
	grid-column-start: 4;
	grid-column-end: 11;
	font-size: 2rem;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	display: flex;
	align-items: center;
	position: relative;
	cursor: pointer;
	&:hover {
		& > div {
			display: block;
			@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
				display: none;
			}
		}
	}
	& > div {
		position: absolute;
		display: none;
		background-color: red;
		right: 87%;
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	}
`
const Dec = styled.pre`
	width: 100%;
	white-space: pre-wrap;
	word-wrap: break-word;
	padding: 3rem 0 3rem 0;
	margin-bottom: 2rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	min-height: 30rem;
	border-bottom: 3px solid ${({ theme }) => theme.COLOR.common.gray[100]};
`
const JoinModalWrap = styled.form``

const JoinText = styled.textarea`
	width: 90%;
	white-space: pre-wrap;
	border-radius: 1rem;
	word-wrap: break-word;
	margin: 1rem 0 2rem 0;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	min-height: 30rem;
	border: 1px solid ${({ theme }) => theme.COLOR.common.gray[300]};
	padding: 2rem;
	&:focus {
		border: none;
		outline: 2px solid ${({ theme }) => theme.COLOR.sub};
	}
`
const ButtonWrap = styled.div`
	display: flex;
	justify-content: center;
	* {
		margin: 0 2rem;
	}
	margin: 0 6rem;
`

const S = {
	Wrapper,
	Container,
	Profile,
	UserImg,
	Info,
	Dec,
	Top,
	TopRight,
	HeartBox,
	FloatBox,
	JoinButton,
	ButtonWrap,
	JoinText,
	WebkHeartBox,
	JoinModalWrap,
	ActivityUserSpan,
}
