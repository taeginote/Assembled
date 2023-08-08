import styled from 'styled-components'

import UserIdService from '../../../Utils/UserIdService'
import useGetCommentData from '../../../Hooks/Queries/get-comment'
import Pagination from '../../../Components/Pagination/Pagination'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import Ballon from '../../../Components/Ballon/Ballon'
import { Cancel_Icon, Pen_Icon, Trash_Icon } from '../../../Icons/Icons'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import CommentApi from '../../../Apis/CommentApi'
import { useRecoilState } from 'recoil'
import { modalViewConfirm } from '../../../Atoms/modalViewConfirm.atom'
import ConfirmModal from '../../../Components/Modal/confirmModal'
import CommentSkeleton from '../../../Components/Skeleton/CommentSkeleton'
import MyPageListNoData from '../../../Error/MypageListNoData'

type CommentId = { commentId: any }

function Comment() {
	const queryClient = useQueryClient()
	const [searchParams, setSearchParams] = useSearchParams()
	const navigate = useNavigate()

	let pageNumber: number | null = Number(searchParams.get('page'))
	const userId = UserIdService.getUserId()
	const [recoilCounter, setRecoilCounter] =
		useRecoilState<boolean>(modalViewConfirm)
	const [page, setPage] = useState<number>(pageNumber || 0)
	const [commentId, setCommentId] = useState<null | number>(null)
	const [changeViewNum, setChangeViewNum] = useState<null | number>(null)
	const [changeVal, setChangeVal] = useState<null | string>(null)
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
	const { mutate: changeMutate } = useMutation(
		data => CommentApi.patchComment(data),
		{
			onSuccess: () => {
				setChangeViewNum(null)
				queryClient.invalidateQueries(['useGetCommentData'])
			},
			onError: () => {},
		},
	)

	const onDeleteComment = (e: CommentId) => {
		setRecoilCounter(true)
		setCommentId(e.commentId)
	}
	const onChangeComment = (e: CommentId) => {
		setChangeViewNum(e.commentId)
	}

	const onChangeBtn = () => {
		if (changeVal?.trim().length === 0) return
		const data: any = {
			commentId: changeViewNum,
			contents: changeVal,
		}
		changeMutate(data)
	}
	// onClick={() => navigate(`/Detail?postId=${el.postId}`)} 이거 해당 게시글 가는거 icon 넣어서 추가해야할듯함
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
							{data?.response?.content.map((el: any, idx: number) => (
								<S.container $state={changeViewNum === el.commentId} key={idx}>
									<S.Left>
										<S.Time> {el.writeDate.split('T')[0]}</S.Time>
										<S.SubTime>{el.writeDate.split('T')[1]}</S.SubTime>
										{changeViewNum === el.commentId ? (
											<S.InputWrap>
												<S.Input
													value={changeVal === null ? el.contents : changeVal}
													onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
														setChangeVal(e.target.value)
													}
												/>
												<button type="button" onClick={onChangeBtn}>
													수정
												</button>
											</S.InputWrap>
										) : (
											<S.Text>{el.contents}</S.Text>
										)}
									</S.Left>
									<S.Right>
										{changeViewNum !== el.commentId ? (
											<button onClick={() => onChangeComment(el)}>
												<div>
													<Ballon text={'모임 수정'} />
												</div>
												<Pen_Icon />
											</button>
										) : (
											<button onClick={() => setChangeViewNum(null)}>
												<div>
													<Ballon text={'수정 취소'} />
												</div>
												<Cancel_Icon />
											</button>
										)}
										<button onClick={() => onDeleteComment(el)}>
											<div>
												<Ballon text={'모임 삭제'} />
											</div>
											<Trash_Icon />
										</button>
									</S.Right>
								</S.container>
							))}

							{data?.response?.content?.length !== 0 && (
								<Pagination
									totalPage={data?.response?.totalPages}
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
									postId={commentId}
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
const container = styled.div<{ $state: boolean }>`
	border-left: 5px solid ${({ theme }) => theme.COLOR.hover};
	margin-bottom: 5rem;
	padding: 1rem 2rem;
	background-color: ${({ theme, $state }) => $state && theme.COLOR.orange};
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
	width: 85%;
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
	margin-top: 2rem;
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
const Input = styled.input`
	margin-top: 2rem;
	border: none;
	padding: 1rem 6rem 1rem 1rem;
	border: 2px solid ${({ theme }) => theme.COLOR.orange};
	border-radius: 3px;
	width: 100%;
`
const InputWrap = styled.div`
	position: relative;
	& > button {
		padding: 0.7rem;
		position: absolute;
		width: 4rem;
		right: 0.5rem;
		top: 2.5rem;
		cursor: pointer;
		@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			padding: 0.5rem;
			top: 2.7rem;
		}
	}
	width: 100%;
	z-index: 10000;
`
const S = {
	Wrapper,
	container,
	Time,
	Text,
	SubTime,
	Left,
	Right,
	Input,
	InputWrap,
}
