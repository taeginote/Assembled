import styled from 'styled-components'
import { FlexColumnCSS } from '../../../Styles/common'
import UserIdService from '../../../Utils/UserIdService'
import useGetCommentData from '../../../Hooks/Queries/get-comment'

function Comment() {
	const list: number[] = [1, 2, 3, 4, 1]

	const userId = UserIdService.getUserId()

	const { data, isLoading } = useGetCommentData(userId)
	console.log(data)
	return (
		<S.Wrapper>
			<h1>작성한 댓글</h1>
			{data?.response?.content.map((el: any) => (
				<S.container>
					<S.Time> {el.writeDate.split('T')[0]}</S.Time>
					<S.SubTime>{el.writeDate.split('T')[1]}</S.SubTime>
					<S.Text>{el.contents}</S.Text>
				</S.container>
			))}
		</S.Wrapper>
	)
}
export default Comment

const Wrapper = styled.div`
	width: 100%;
	margin: 0 10rem;
	& > h1 {
		margin-bottom: 5rem;
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

const S = { Wrapper, container, Time, Text, SubTime }
