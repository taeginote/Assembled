import styled from 'styled-components'
import { useMutation } from '@tanstack/react-query'

import { FlexAlignCSS } from '../../../Styles/common'

import Button from '../../../Components/Button/Button'
import { CommentFormPropsType } from '../../../Types/dataType'
import { CommentData } from '../../../Types/apiType'
import CommentApi from '../../../Apis/CommentApi'
import UserIdService from '../../../Utils/UserIdService'
import ProfileImgReturn from '../../../Utils/ProfileImgReturn'
import TokenService from '../../../Utils/TokenService'
import { TextareaEventTargetType } from '../../../Types/type'
import { useState } from 'react'
import { Cancel_Icon, Pen_Icon, Trash_Icon } from '../../../Icons/Icons'
import Ballon from '../../../Components/Ballon/Ballon'

interface CommentType {
	commentId: null | number
	contents: null | string
}

function CommentForm({
	comments,
	refetch,
	postId,
	token,
}: CommentFormPropsType) {
	const [commentsInput, SetCommentsInput] = useState<string | undefined>(
		undefined,
	)
	const [changeCommentVal, setChangeCommentVal] = useState<null | string>(null)
	const [changeViewNum, setChangeViewNum] = useState<null | number>(null)

	const userId = UserIdService.getUserId()
	const AccessToken = TokenService.getAccessToken()

	const { mutate } = useMutation(
		(data: CommentData) => CommentApi.postComment(data),
		{
			onSuccess: () => {
				SetCommentsInput('')
				refetch()
			},
			onError: () => {},
		},
	)
	const { mutate: changeMutate } = useMutation(
		(data: CommentType) => CommentApi.putComment(data),
		{
			onSuccess: () => {
				setChangeViewNum(null)
				refetch()
			},
			onError: () => {},
		},
	)
	const { mutate: deleteMutate } = useMutation(
		(commentId?: number) => CommentApi.deleteComment(commentId),
		{
			onSuccess: () => {
				refetch()
			},
			onError: () => {},
		},
	)

	const onSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		SetCommentsInput(e.currentTarget.textarea.value)
		if (AccessToken === null) return
		if (commentsInput?.trim().length === 0) return

		const data: CommentData = {
			contents: commentsInput,
			postId,
		}
		mutate(data)
	}
	const onkeyDown = (e: TextareaEventTargetType) => {
		if (e.nativeEvent.isComposing) return
		if (e.key === 'Enter') {
			e.preventDefault()

			SetCommentsInput(commentsInput)

			if (AccessToken === null) return
			if (commentsInput?.trim().length === 0) return

			const data: CommentData = {
				contents: commentsInput,
				postId,
			}
			mutate(data)
		}
	}
	const onKeyDownComment = (e: TextareaEventTargetType) => {
		if (e.nativeEvent.isComposing) return

		if (e.key === 'Enter') {
			e.preventDefault()

			if (changeCommentVal?.trim().length === 0) return
			const data: CommentType = {
				commentId: changeViewNum,
				contents: changeCommentVal,
			}
			changeMutate(data)
		}
	}
	const onCancelComment = () => {
		setChangeViewNum(null)
		setChangeCommentVal(null)
	}

	return (
		<>
			<S.Container onSubmit={onSubmitComment}>
				<div>
					<span>댓글</span>
					{comments.length}
				</div>
				{token && (
					<>
						<S.CommentInput>
							<textarea
								placeholder="댓글을 작성하세요"
								name="textarea"
								onKeyDown={onkeyDown}
								onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
									SetCommentsInput(e.target.value)
								}
								// value={commentsInput !== undefined && commentsInput}
								value={commentsInput}
							/>
						</S.CommentInput>
						<span>
							<Button size={'big'} variant={'default-reverse'} shape={'round'}>
								댓글 작성
							</Button>
						</span>
					</>
				)}
			</S.Container>
			{comments.map((comment: any, idx: number) => (
				<S.CommentsList key={idx}>
					<S.CommentTop>
						<span>
							<S.UserImg
								src={ProfileImgReturn(comment?.profile?.filePath)}
								alt="UserImage"
							/>
							<div>
								<div>{comment.writerNickname}</div>
								<span>{comment.writeDate}</span>
							</div>
						</span>
						<S.Right>
							{comment?.userId == userId && (
								<>
									{changeViewNum !== comment.commentId ? (
										<button
											onClick={() => setChangeViewNum(comment.commentId)}
											title="Modify"
										>
											<div>
												<Ballon text={'댓글 수정'} />
											</div>
											<Pen_Icon />
										</button>
									) : (
										<button onClick={onCancelComment} title="Cancel">
											<div>
												<Ballon text={'수정 취소'} />
											</div>
											<Cancel_Icon />
										</button>
									)}
									<button
										onClick={() => deleteMutate(comment.commentId)}
										title="Delete"
									>
										<div>
											<Ballon text={'댓글 삭제'} />
										</div>
										<Trash_Icon />
									</button>
								</>
							)}
						</S.Right>
					</S.CommentTop>
					{changeViewNum === comment.commentId ? (
						<S.ChageCommentTxt
							value={
								changeCommentVal === null ? comment.contents : changeCommentVal
							}
							onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
								setChangeCommentVal(e.target.value)
							}
							onKeyDown={onKeyDownComment}
						/>
					) : (
						<S.CommentBottom>{comment.contents}</S.CommentBottom>
					)}
				</S.CommentsList>
			))}
		</>
	)
}
export default CommentForm

const Container = styled.form`
	& > div {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		color: ${({ theme }) => theme.COLOR.common.gray[200]};
		& > span {
			font-size: ${({ theme }) => theme.FONT_SIZE.small};
			margin-right: 0.5rem;
			color: ${({ theme }) => theme.COLOR.button};
			margin-bottom: 5.5rem;
		}
		margin-bottom: 2.5rem;
	}

	& > span {
		display: flex;
		justify-content: end;
		margin-bottom: 2rem;
	}
`
const CommentInput = styled.div`
	& > img {
		border-radius: 50%;
		width: 3.5rem;
		height: 3.5rem;
		margin-right: 2.5rem;
	}
	& > textarea {
		width: 100%;
		height: 12rem;
		padding: 2rem;
		border-radius: 2rem;
		outline: none;
		border: 2px solid ${({ theme }) => theme.COLOR.common.gray[100]};
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		resize: none;
	}
	display: flex;
	align-items: start;
`
const CommentsList = styled.div`
	border-bottom: 2px solid ${({ theme }) => theme.COLOR.common.gray[300]};
	margin-bottom: 2rem;
`
const CommentTop = styled.div`
	${FlexAlignCSS}
	justify-content: space-between;
	& > span {
		display: flex;
		& > div {
			& > div {
				font-size: ${({ theme }) => theme.FONT_SIZE.xs};
			}
			& > span {
				font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
				color: ${({ theme }) => theme.COLOR.common.gray[300]};
			}
		}
	}
`
const CommentBottom = styled.div`
	padding: 3rem 1rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`
const UserImg = styled.img`
	border-radius: 50%;
	width: 4rem;
	height: 4rem;
	margin-right: 1rem;
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
const ChageCommentTxt = styled.textarea`
	width: 100%;
	height: 10rem;
	margin: 1rem 0;
	padding: 2rem;
	border-radius: 2rem;
	outline: none;
	border: 2px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	resize: none;
`
const S = {
	Container,
	CommentInput,
	CommentsList,
	CommentTop,
	CommentBottom,
	UserImg,
	Right,
	ChageCommentTxt,
}
