import styled from 'styled-components'
import Button from '../Button/Button'
function CommentForm() {
	return (
		<>
			<S.Container>
				<div>
					<span>댓글</span>2
				</div>
				<S.CommentInput>
					<img src="https://cdn.inflearn.com/public/users/thumbnails/234401/660102d4-1e7b-4c43-a7ba-7d0ee6d96b83" />
					<textarea placeholder="댓글을 작성하세요" />
				</S.CommentInput>
				<span>
					<Button size={'big'} variant={'default-reverse'} shape={'round'}>
						댓글 작성
					</Button>
				</span>
			</S.Container>
			<S.CommentsList>
				<img src="https://cdn.inflearn.com/public/users/thumbnails/234401/660102d4-1e7b-4c43-a7ba-7d0ee6d96b83" />
			</S.CommentsList>
		</>
	)
}
export default CommentForm

const Container = styled.div`
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
	& > img {
		border-radius: 50%;
		width: 4rem;
		height: 4rem;
		margin-right: 2.5rem;
	}
`

const S = { Container, CommentInput, CommentsList }
