import styled from 'styled-components'
import { ColumnNumberCSS, FlexAlignCSS, TopPadding } from '../../Styles/common'
import useGetDetailData from '../../Hooks/Queries/get-detail'
import LoadingPage from '../../Components/LoadingPage/Loading'
import CommentForm from './Components/CommentForm'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ProfileImgReturn from '../../Utils/ProfileImgReturn'
import {
	FillHeart_Icon,
	NotFillHeart_Icon,
	Pen_Icon,
	Trash_Icon,
} from '../../Icons/Icons'
import Ballon from '../../Components/Ballon/Ballon'
import PostApi from '../../Apis/PostApi'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import ConfirmModal from '../../Components/Modal/confirmModal'
import { modalViewConfirm } from '../../Atoms/modalViewConfirm.atom'
import { useRecoilState } from 'recoil'
import { PostLike } from '../../Types/apiType'
import PostLikeApi from '../../Apis/PostLikeApi'
import UserIdService from '../../Utils/UserIdService'
import { FlexCenterCSS } from '../../Styles/common'
import TokenService from '../../Utils/TokenService'
import Button from '../../Components/Button/Button'
import { FlexColumnCSS } from '../../Styles/common'
import JoinModal from '../../Components/Modal/joinModal'
import { useState } from 'react'

function Detail() {
	const navigate = useNavigate()
	const queryClient = useQueryClient()
	const token = TokenService.getAccessToken()

	const [searchParams, setSearchParams] = useSearchParams()
	const [joinModal, setJoinModal] = useState(false)
	const [recoilCounter, setRecoilCounter] =
		useRecoilState<boolean>(modalViewConfirm)

	const UserId = UserIdService.getUserId()
	let postId: number | null = Number(searchParams.get('postId'))

	const { data, isLoading, refetch } = useGetDetailData(postId)

	const profileImg = ProfileImgReturn(data?.writerProfileImages)
	const IsMinePage = data?.response?.writerId == UserId ? true : false

	const { mutate } = useMutation(
		(postId: number | undefined) => PostApi.DeletePost(postId),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['useGetListData'])
			},
			onError: () => {},
		},
	)
	const { mutate: heartMutate } = useMutation(
		(likeData: PostLike) => PostLikeApi.PostLike(likeData),
		{
			onSuccess: () => {
				refetch()
			},
		},
	)

	const { mutate: cancelMutate } = useMutation(
		(likeData?: number) => PostLikeApi.CancelLike(likeData),
		{
			onSuccess: () => {
				refetch()
			},
		},
	)

	const onHeart = () => {
		if (token === null) return
		heartMutate({ postId })
	}

	const onDeleteClub = () => {
		setRecoilCounter(true)
	}

	return (
		<S.Wrapper>
			{isLoading ? (
				<LoadingPage />
			) : (
				<S.Container>
					<S.Top>
						<span>
							<h1>{data?.response?.title}</h1>
							<S.Profile>
								<S.UserImg src={profileImg} alt="ProfileImage" />
								<div>{data?.response?.writerNickname}</div>
								<span> | </span>
								<span>{data?.response?.createdTime?.split('T')[0]}</span>
							</S.Profile>
						</span>
						<>
							<S.TopRight>
								{IsMinePage && (
									<p>
										<button
											title="Modify"
											onClick={() => navigate(`/register/${postId}`)}
										>
											<div>
												<Ballon text={'모임 수정'} />
											</div>
											<Pen_Icon />
										</button>
										<button title="Delete" onClick={onDeleteClub}>
											<div>
												<Ballon text={'모임 삭제'} />
											</div>
											<Trash_Icon />
										</button>
									</p>
								)}
								<div>
									{!data?.response?.likeStatus ? (
										<NotFillHeart_Icon onClick={onHeart} />
									) : (
										<FillHeart_Icon onClick={() => cancelMutate(postId!)} />
									)}
									<div>{data?.response?.likes}</div>
								</div>
							</S.TopRight>
						</>
					</S.Top>
					<S.Info>
						<div>
							<div>활동 기간</div>
							<span>
								{data?.response?.expectedPeriod === 0
									? '제한없음'
									: data?.response?.expectedPeriod + '달'}
							</span>
						</div>
						<div>
							<div>카테고리</div>
							<span>{data?.response?.categoryName}</span>
						</div>
						<div>
							<div>모집 인원</div>

							<span>
								{data?.response?.personnelNumber === 0
									? '제한없음'
									: data?.response?.personnelNumber + '명'}
							</span>
						</div>
					</S.Info>
					<h3>프로젝트 설명</h3>
					<S.Dec>{data?.response?.contents}</S.Dec>
					{data && (
						<CommentForm
							comments={data?.response?.comments}
							postId={postId}
							refetch={refetch}
							token={token}
						/>
					)}

					<S.FloatBox>
						{!data?.response?.likeStatus ? (
							<S.HeartBox onClick={onHeart}>
								<NotFillHeart_Icon />
								<div>{data?.response?.likes}</div>
							</S.HeartBox>
						) : (
							<S.HeartBox onClick={() => cancelMutate(postId!)}>
								<FillHeart_Icon />
								<div>{data?.response?.likes}</div>
							</S.HeartBox>
						)}
						<S.JoinButton onClick={() => setJoinModal(true)}>
							가입 신청
						</S.JoinButton>
					</S.FloatBox>
				</S.Container>
			)}
			{recoilCounter && (
				<ConfirmModal
					text={'정말로 삭제하시겠습니까?'}
					url={'/'}
					mutate={mutate}
					postId={postId}
				/>
			)}
			{joinModal && (
				<JoinModal>
					<S.JoinText>안녕하세요~ 잘 부탁드립니다~😀</S.JoinText>
					<S.ButtonWrap>
						<Button>가입 신청</Button>
						<Button variant="default-white" onClick={() => setJoinModal(false)}>
							취소
						</Button>
					</S.ButtonWrap>
				</JoinModal>
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
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
		display: none;
	}
	cursor: pointer;
`
const JoinButton = styled(Button)`
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	margin-top: 1rem;
	border: 1px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	border-radius: 1rem;
	height: 5rem;
`
const FloatBox = styled.div`
	position: fixed;
	top: 45%;
	right: 15%;
	${FlexColumnCSS}
	align-items: center;
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
	span {
		margin-left: 2rem;
	}
	padding: 4rem 0;
`
const Top = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 3px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	& > span {
	}
`
const TopRight = styled.div`
	margin-right: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: end;
	margin-bottom: 4.8rem;
	align-items: end;
	& > p {
		margin: 2rem 0 5rem 0;
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
		@media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
			${FlexCenterCSS}
			&>div {
				margin-left: 0.5rem;
				font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
				color: ${({ theme }) => theme.COLOR.common.gray[200]};
			}
		}
		cursor: pointer;
	}
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
		}
	}
`
const Dec = styled.pre`
	width: 100%;

	white-space: pre-wrap;

	word-wrap: break-word;
	margin: 3rem 0 5rem 0;
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	min-height: 30rem;
	border-bottom: 3px solid ${({ theme }) => theme.COLOR.common.gray[100]};
`

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
	* {
		margin: 0 2rem;
	}
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
}
