import styled from 'styled-components'

import {
	FlexAlignCSS,
	FlexBetweenCSS,
	FlexColumnCSS,
} from '../../../Styles/common'
import { MyJoinRequestContent } from '../../../Hooks/Queries/get-myjoinRequestList'
import { useNavigate } from 'react-router-dom'

function JoinRequestItemBox({ data }: { data: MyJoinRequestContent }) {
	const navigate = useNavigate()

	return (
		<S.Wrapper onClick={() => navigate(`/Detail?meetingId=${data.meetingId}`)}>
			<S.Container>
				<S.Name>{data.meetingName}</S.Name>
				<S.Message>
					{data?.message && data?.message?.length > 45
						? data?.message?.substr(0, 45) + '...'
						: data?.message}
				</S.Message>
				<S.Status $status={data.status}>
					{data.status === 'REQUEST'
						? '지원중'
						: data.status === 'APPROVAL'
						? '가입완료'
						: data.status === 'REJECT'
						? '가입거절'
						: '취소'}
				</S.Status>
			</S.Container>
		</S.Wrapper>
	)
}
export default JoinRequestItemBox

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
	}
`
const Container = styled.div`
	${FlexColumnCSS}
	align-items: start;
	& > div {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};

		@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		}
	}
`
const Name = styled.div`
	width: 100%;
	text-align: start;
	border-bottom: 2px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	margin-bottom: 2rem;
	padding-bottom: 1rem;
`

const Status = styled.span<{ $status: string }>`
	background-color: ${({ theme, $status }) =>
		$status === 'APPROVAL'
			? theme.COLOR.main //main
			: $status === 'REQUEST'
			? theme.COLOR.common.white //admin //font black
			: $status === 'REJECT'
			? theme.COLOR.error //error
			: theme.COLOR.admin}; //admin //font black

	font-size: ${({ theme, $status }) =>
		$status === 'REQUEST' || $status === 'CANCEL'
			? theme.COLOR.common.white
			: theme.COLOR.button};
	color: ${({ theme, $status }) =>
		$status === 'REQUEST' || $status === 'CANCEL'
			? theme.COLOR.common.black
			: theme.COLOR.common.white};
	border: 1px solid
		${({ theme, $status }) =>
			$status === 'REQUEST' ? theme.COLOR.common.black : 'none'};
	padding: 0.1rem 0.7rem;
	text-align: center;
	border-radius: 1rem;
`

const Message = styled.div`
	min-height: 8rem;
	max-height: 8rem;
	text-align: start;
`

const S = {
	Wrapper,
	Name,
	Status,
	Container,

	Message,
}
