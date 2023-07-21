import styled from 'styled-components'
import { useMutation } from '@tanstack/react-query'

import { FlexAlignCSS } from '../../../Styles/common'
// import DetailApi from '../../../Apis/DetailApi'
import Button from '../../../Components/Button/Button'
import { CommentFormPropsType } from '../../../Types/dataType'
import { postComment } from '../../../Types/apiType'

function CommentForm({
	comments,
	refetch,
	postId,
	userImg,
}: CommentFormPropsType) {
	// const { mutate } = useMutation(
	// 	(data: postComment) => DetailApi.Comments(data),
	// 	{
	// 		onSuccess: () => {
	// 			refetch()
	// 		},
	// 		onError: () => {},
	// 	},
	// )

	const onSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const commentContents = e.currentTarget.textarea.value
		const data: postComment['data'] = {
			commentContents,
			userId: 1,
			postId,
		}
		// mutate({ data })
	}
	return (
		<>
			<S.Container onSubmit={onSubmitComment}>
				<div>
					<span>댓글</span>
					{comments.length}
				</div>
				<S.CommentInput>
					<textarea placeholder="댓글을 작성하세요" name="textarea" />
				</S.CommentInput>
				<span>
					<Button size={'big'} variant={'default-reverse'} shape={'round'}>
						댓글 작성
					</Button>
				</span>
			</S.Container>
			{comments.map(comment => (
				<S.CommentsList>
					<S.CommentTop>
						<img src={comment.userProfile.fileFullPath} />
						<div>
							<div>{comment.commentCreator}</div>
							<span>{comment.commentCreatedDate}</span>
						</div>
					</S.CommentTop>
					<S.CommentBottom>{comment.commentContents}</S.CommentBottom>
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
	& > img {
		border-radius: 50%;
		width: 4rem;
		height: 4rem;
		margin-right: 2.5rem;
	}
	${FlexAlignCSS}
	&>div {
		& > div {
			font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		}
		& > span {
			font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
			color: ${({ theme }) => theme.COLOR.common.gray[300]};
		}
	}
`
const CommentBottom = styled.div`
	padding: 3rem 0;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`
const S = { Container, CommentInput, CommentsList, CommentTop, CommentBottom }
