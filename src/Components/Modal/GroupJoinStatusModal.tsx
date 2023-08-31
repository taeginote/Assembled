import { styled } from 'styled-components'
import { FlexCenterCSS } from '../../Styles/common'
import Button from '../Button/Button'
import { Cancel_big_Icon } from '../../Icons/Icons'
import { FlexBetweenCSS } from '../../Styles/common'
import { GroupJoinModalTypeProps } from '../../Types/modalType'
import useGetJoinListData, { Content } from '../../Hooks/Queries/get-joinList'
import JoinListModalSkeleton from '../Skeleton/JoinListModalSkeleton'
import { useMutation } from '@tanstack/react-query'
import JoinApi from '../../Apis/JoinApi'
import { putJoinStatusProps } from '../../Types/apiType'

function GroupJoiStatusModal({
	setState,
	groupJoinStatusModal,
}: GroupJoinModalTypeProps) {
	const onCancelModal = () => {
		document.body.style.overflow = 'auto'
		setState({
			view: false,
			Id: null,
		})
	}

	const { data, isLoading } = useGetJoinListData(groupJoinStatusModal.Id!)

	const { mutate: putMudate } = useMutation(
		(data: putJoinStatusProps) => JoinApi.PutJoinStatus(data),
		{
			onSuccess: () => {},
		},
	)

	let requestData = data?.response?.find(
		(el: { status: string }) => el.status === 'REQUEST',
	)

	const onJoinStatusBtn = (
		el: Content,
		status: 'APPROVAL' | 'REJECT' | 'BLOCK',
	) => {
		putMudate({
			joinRequestId: el.joinRequestId,
			message: el.message,
			status,
		})
	}

	const skeletonArr: 0[] = Array(2).fill(0)
	return (
		<S.Wrapper>
			<S.Box>
				<S.TitleHead>
					<h4>모임 가입 신청 목록</h4>
					<div>
						<Cancel_big_Icon onClick={onCancelModal} />
					</div>
				</S.TitleHead>
				<S.JoinList>
					{isLoading ? (
						<>
							{skeletonArr.map((el, idx: number) => (
								<JoinListModalSkeleton key={idx} />
							))}
						</>
					) : (
						<>
							{data?.response?.length === 0 ? (
								<S.ListNo>신청한 인원이 없습니다 :)</S.ListNo>
							) : (
								<>
									{data?.response.map((el: Content, idx: number) => (
										<li key={idx}>
											<S.JoinUser>
												<S.JoinUserNickname>
													<span>신청자 : </span>
													{el.nickname}
												</S.JoinUserNickname>
												<S.JoinDate>{el.createdDate}</S.JoinDate>
											</S.JoinUser>
											<S.LiContent>
												<span>메세지 : </span>
												<div>{el.message}</div>
											</S.LiContent>
											<S.ButtonWrap>
												<Button
													size="normal"
													onClick={() => onJoinStatusBtn(el, 'APPROVAL')}
												>
													수락
												</Button>
												<Button
													size="normal"
													variant="default-white"
													onClick={() => onJoinStatusBtn(el, 'REJECT')}
												>
													거절
												</Button>
												<Button
													size="normal"
													variant="default-reverse"
													onClick={() => onJoinStatusBtn(el, 'BLOCK')}
												>
													차단
												</Button>
											</S.ButtonWrap>
										</li>
									))}
								</>
							)}
						</>
					)}
					{/* 데이터 없을때  */}
					{/* <S.ListNoData>가입 신청한 인원이 없습니다 :)</S.ListNoData> */}
				</S.JoinList>
			</S.Box>
		</S.Wrapper>
	)
}
export default GroupJoiStatusModal

const Wrapper = styled.div`
	position: fixed;
	top: -5rem;
	left: 0;
	height: 110vh;
	min-height: 100%;
	width: 100%;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.4);
	${FlexCenterCSS}
`
const TitleHead = styled.div`
	${FlexBetweenCSS}
	&>div {
		cursor: pointer;
	}
`
const Box = styled.div`
	width: 50rem;
	height: 50%;
	overflow: auto;
	padding: 2rem 2rem;
	text-align: start;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.COLOR.common.white};

	animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
	position: fixed;
	@keyframes fadeIn {
		0% {
			top: -20rem;
		}
		100% {
			top: 30%;
		}
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 90%;
	}
`
const JoinList = styled.ul`
	& > li {
		padding: 1rem 0.5rem;
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		border: 2px solid ${({ theme }) => theme.COLOR.common.gray[100]};
		border-radius: 1rem;
		margin-top: 2rem;
	}
`
const ListNo = styled.h4`
	margin-top: 15rem;
	text-align: center;
	color: ${({ theme }) => theme.COLOR.common.gray[200]};
`
const ButtonWrap = styled.div`
	text-align: end;
	margin-top: 2rem;
	* {
		margin: 0 0.3rem;
	}
`
const ListNoData = styled.div`
	margin-top: 2rem;
	color: ${({ theme }) => theme.COLOR.common.gray[200]};
`
const LiHead = styled.div``
const JoinUser = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	color: ${({ theme }) => theme.COLOR.common.gray[200]};
	${FlexBetweenCSS}
`
const JoinUserNickname = styled.div`
	& > span {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		color: ${({ theme }) => theme.COLOR.button};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
		margin-right: 0.5rem;
	}
`
const JoinDate = styled.div`
	color: ${({ theme }) => theme.COLOR.common.gray[200]};
	margin-right: 0.5rem;
`
const LiContent = styled.div`
	margin: 1rem 0;
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	color: ${({ theme }) => theme.COLOR.common.gray[200]};
	display: flex;
	& > span {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		color: ${({ theme }) => theme.COLOR.button};
		min-width: 6.5rem;
	}
	& > div {
		height: 10rem;
		overflow: auto;
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	}
`
const S = {
	Wrapper,
	Box,
	JoinList,
	ListNoData,
	ButtonWrap,
	LiHead,
	LiContent,
	JoinUser,
	TitleHead,
	JoinUserNickname,
	JoinDate,
	ListNo,
}
