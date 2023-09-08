import styled from 'styled-components'

import {
	FlexAlignCSS,
	FlexBetweenCSS,
	FlexColumnCSS,
} from '../../../Styles/common'
import { MyJoinRequestContent } from '../../../Hooks/Queries/get-myjoinRequestList'

function JoinRequestItemBox({ data }: { data: MyJoinRequestContent }) {
	return (
		<S.Wrapper>
			<S.Container>
				<S.Name>ex) 한바탕</S.Name>
				<S.Message>
					{data?.message && data?.message?.length > 45
						? data?.message?.substr(0, 45) + '...'
						: data?.message}
				</S.Message>
				<S.Status>모집완료</S.Status>
			</S.Container>
			<S.UserBox>
				<div>
					<div>
						{data?.nickname && data?.nickname?.length > 7
							? data?.nickname?.substr(0, 7) + '...'
							: data?.nickname}
					</div>
				</div>
			</S.UserBox>
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
	border-bottom: 2px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	padding-bottom: 2rem;
`
const Name = styled.div`
	width: 100%;
	text-align: start;
	border-bottom: 2px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	margin-bottom: 2rem;
	padding-bottom: 1rem;
`
const UserBox = styled.div`
	${FlexBetweenCSS}
	padding: 2rem 0 0 0;
	& > div {
		${FlexAlignCSS}
	}
`

const Status = styled.span`
	background-color: ${({ theme }) => theme.COLOR.orange};
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	color: ${({ theme }) => theme.COLOR.hover};
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
	UserBox,
	Message,
}
