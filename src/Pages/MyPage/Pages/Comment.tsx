import styled from 'styled-components'
import UserIdService from '../../../Utils/UserIdService'
import useGetCommentData from '../../../Hooks/Queries/get-comment'
import Pagination from '../../../Components/Pagination/Pagination'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import Ballon from '../../../Components/Ballon/Ballon'
import { Trash_Icon } from '../../../Icons/Icons'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import CommentApi from '../../../Apis/CommentApi'
import { useRecoilState } from 'recoil'
import { modalViewConfirm } from '../../../Atoms/modalViewConfirm.atom'
import ConfirmModal from '../../../Components/Modal/confirmModal'
import CommentSkeleton from '../../../Components/Skeleton/CommentSkeleton'
import MyPageListNoData from '../../../Error/MypageListNoData'
import { Comments } from '../../../Hooks/Queries/get-detail'

type CommentId = { commentId: number }

function Comment() {
	const queryClient = useQueryClient()
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()
	const [recoilCounter, setRecoilCounter] =
		useRecoilState<boolean>(modalViewConfirm)
	let pageNumber: number | null = Number(searchParams.get('page'))
	const userId = UserIdService.getUserId()

	const [page, setPage] = useState<number>(pageNumber || 0)
	const [commentId, setCommentId] = useState<null | number>(null)

	const loadingArr: 0[] = Array(4).fill(0)

	const { data, isLoading } = useGetCommentData(userId, page)

	const { mutate } = useMutation(
		(commentId: number | undefined) => CommentApi.deleteComment(commentId),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['useGetCommentData'])
				setCommentId(null)
			},
			onError: () => {},
		},
	)

	const onDeleteComment = (e: CommentId) => {
		setRecoilCounter(true)
		setCommentId(e.commentId)
	}

	return (
		<>
			{isLoading ? (
				<S.Wrapper>
					{loadingArr.map((el: 0, idx: number) => (
						<CommentSkeleton key={idx} />
					))}
				</S.Wrapper>
			) : (
				<>
					{data?.response?.content?.length === 0 ? (
						<S.Wrapper>
							<MyPageListNoData comment={'작성한 댓글이 없습니다.'} />
						</S.Wrapper>
					) : (
						<S.Wrapper>
							<p>작성한 댓글</p>
							{data?.response?.content.map((el: Comments, idx: number) => (
								<S.container>
									<S.Left
										onClick={() =>
											navigate(`/Detail?meetingId=${el.meetingId}`)
										}
									>
										<S.Title>{el.meetingTitle}</S.Title>
										<S.Text>{el.contents}</S.Text>
										<S.Time> {el.writeDate.split('T')[0]}</S.Time>
										<S.SubTime>{el.writeDate.split('T')[1]}</S.SubTime>
									</S.Left>
									<S.Right>
										<button onClick={() => onDeleteComment(el)} title="Delete">
											<div>
												<Ballon text={'댓글 삭제'} />
											</div>
											<Trash_Icon />
										</button>
									</S.Right>
								</S.container>
							))}

							{data?.response?.content?.length !== 0 && (
								<Pagination
									totalPage={data!.response!.totalPages}
									limit={10}
									scroll={765}
									setPage={setPage}
								/>
							)}
							{recoilCounter && (
								<ConfirmModal
									text={'정말로 삭제하시겠습니까?'}
									url={'/myPage/comment'}
									mutate={mutate}
									meetingId={commentId}
								/>
							)}
						</S.Wrapper>
					)}
				</>
			)}
		</>
	)
}
export default Comment

const Wrapper = styled.div`
	width: 100%;
	margin: 0 10rem;
	& > p {
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
		margin-bottom: 2rem;
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		margin: 0 2rem;
	}
`
const container = styled.div`
	border-left: 5px solid ${({ theme }) => theme.COLOR.hover};
	margin-bottom: 5rem;
	padding: 1rem 2rem;
	&:hover {
		background-color: ${({ theme }) => theme.COLOR.orange};
		transition: all 1s;
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		background-color: ${({ theme }) => theme.COLOR.orange};
		padding: 1rem 1rem;
	}
	display: flex;
	justify-content: space-between;
`
const Left = styled.div`
	width: 95%;
	cursor: pointer;
`
const Title = styled.div`
	margin-bottom: 2rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
`
const Time = styled.span`
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
`
const SubTime = styled.span`
	margin-left: 2rem;

	color: ${({ theme }) => theme.COLOR.common.gray[200]};
`
const Text = styled.div`
	margin: 2rem 0;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`
const Right = styled.div`
	& > button {
		background-color: transparent;
		position: relative;
		margin-left: 2rem;
		& > div {
			display: none;
		}
	}
	& > button:hover {
		scale: 1.1;
		& > div {
			display: block;
		}
	}
`

const S = {
	Wrapper,
	container,
	Time,
	Text,
	SubTime,
	Left,
	Right,
	Title,
}
