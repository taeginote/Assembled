import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { styled } from 'styled-components'
import ActivityUserListEditModal from '../../../Components/Modal/ActivityUserListEditModal'
import useGetDetailData from '../../../Hooks/Queries/get-detail'

function HomePage() {
	const [isActivityUserModal, setIsActivityUserModal] = useState<boolean>(false)
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	let meetingId: number | null = Number(searchParams.get('meetingId')) || null

	const { data, isLoading } = useGetDetailData(meetingId!)

	return (
		<S.Wrapper>
			<S.ImgWrapper>
				<S.Img src="/assets/img/activityHome3.png" />
			</S.ImgWrapper>
			<S.ContentsWrapper>
				<S.meetingName>
					안녕하세요. <span>{data?.response?.name}</span> 활동 페이지입니다.
				</S.meetingName>
			</S.ContentsWrapper>
			<S.ListWrapper>
				<S.List
					onClick={() => navigate(`/activity/chatting?meetingId=${meetingId}`)}
				>
					📞 채팅
				</S.List>
				<S.List
					onClick={() => navigate(`/activity/date?meetingId=${meetingId}`)}
				>
					📆 달력
				</S.List>
				<S.List onClick={() => setIsActivityUserModal(true)}>
					🔍 모임 인원 조회
				</S.List>
			</S.ListWrapper>
			{isActivityUserModal && (
				<ActivityUserListEditModal
					meetingId={meetingId!}
					setState={setIsActivityUserModal}
					name={data?.response?.name!}
				/>
			)}
		</S.Wrapper>
	)
}
export default HomePage

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const Img = styled.img`
	width: 70%;
`
const ImgWrapper = styled.div`
	width: 100%;
	background-color: #eab39b;
	display: flex;
	justify-content: center;
`
const meetingName = styled.div`
	margin: 4rem 0 0 2rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
	& > span {
		font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`
const ContentsWrapper = styled.div`
	width: 90%;
`
const List = styled.div`
	&:hover {
		background-color: ${({ theme }) => theme.COLOR.orange};
	}
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	text-decoration: underline;
	text-decoration-color: gray;
	text-underline-position: under;
	cursor: pointer;
	margin: 2rem 0;
	width: 50%;
`
const ListWrapper = styled.div`
	width: 87.5%;
`
const S = {
	Wrapper,
	Img,
	ImgWrapper,
	meetingName,
	ContentsWrapper,
	List,
	ListWrapper,
}
