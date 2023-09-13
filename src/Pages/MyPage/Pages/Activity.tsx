import { styled } from 'styled-components'
import {
	ColumnNumberCSS,
	FlexCenterCSS,
	GridCenterCSS,
} from '../../../Styles/common'
import Pagination from '../../../Components/Pagination/Pagination'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ActivityItemBox from '../Components/ActivityItemBox'
import useGetActivityData from '../../../Hooks/Queries/get-activity'
import { Content } from '../../../Hooks/Queries/get-list'
import CardSkeleton from '../../../Components/Skeleton/CardSkeleton'
import MyPageListNoData from '../../../Error/MypageListNoData'
import ActivityUserListModal from '../../../Components/Modal/ActivityUserListModal'
import UserNickNameService from '../../../Utils/UserNickNameService'
import { Arrow_Icon } from '../../../Icons/Icons'
import { FlexAlignCSS } from '../../../Styles/common'
import Ballon from '../../../Components/Ballon/Ballon'

function Activity() {
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()
	let pageNumber: number | null = Number(searchParams.get('page'))
	const [page, setPage] = useState<number>(pageNumber || 1)
	const [userListModal, setUserListModal] = useState(false)
	const [meetingId, setMeetingId] = useState<null | number>(null)
	const { data, isLoading } = useGetActivityData(page)
	const userNickName = UserNickNameService.getNickName()
	const loadingArr: 0[] = Array(4).fill(0)

	return (
		<S.Wrapper>
			<S.ListWrap>
				<S.UserNickName>
					{userNickName}
					<span>님</span>
					<S.UserArrowIconWrap
						onClick={() => navigate('/myPage/setting/userSetting')}
					>
						<Arrow_Icon rotate={0} />
						<div>
							<Ballon text="내정보" />
						</div>
					</S.UserArrowIconWrap>
				</S.UserNickName>
				<p>내가 활동중인 모임 </p>
				{isLoading ? (
					<>
						{loadingArr.map((el: 0, idx: number) => (
							<CardSkeleton key={idx} />
						))}
					</>
				) : (
					<>
						{data?.response?.content.length === 0 ? (
							<>
								<MyPageListNoData comment={'활동중인 모임이 없습니다.'} />
							</>
						) : (
							<>
								{data?.response?.content.map((el: Content, idx: number) => (
									<ActivityItemBox
										data={el}
										key={idx}
										setMeetingId={setMeetingId}
										setUserListModal={setUserListModal}
									/>
								))}
								<Pagination
									totalPage={data?.response?.totalPages!}
									limit={10}
									scroll={765}
									setPage={setPage}
								/>
							</>
						)}
					</>
				)}
			</S.ListWrap>
			{userListModal && (
				<ActivityUserListModal
					meetingId={meetingId!}
					setState={setUserListModal}
				/>
			)}
		</S.Wrapper>
	)
}
export default Activity

const Wrapper = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	width: 80%;
	border-radius: 0.7rem;
	${FlexCenterCSS}
	&>div {
		text-align: center;
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 90%;
	}
`
const ListWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 10rem;
	width: 100%;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		margin-left: 4.5rem;
	}
	& > p {
		margin-left: 14rem;
		width: 100%;
		margin-right: 14rem;
		text-align: start;
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		margin-bottom: 2rem;
	}
`
const UserNickName = styled.div`
	width: 100%;
	text-align: start;
	margin-bottom: 2rem;
	& > span {
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	}
	${FlexAlignCSS}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		display: none;
	}
`
const UserArrowIconWrap = styled.div`
	cursor: pointer;
	${FlexAlignCSS}
	position: relative;
	&:hover {
		& > div {
			display: block;
			@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
				display: none;
			}
		}
	}
	& > div {
		display: none;
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	}
`
const Container = styled.div`
	width: 118%;
	${GridCenterCSS}
	${ColumnNumberCSS(3)};
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
		${ColumnNumberCSS(2)};
	}
	& > div {
		width: 100%;
	}
`

const S = { ListWrap, Container, Wrapper, UserNickName, UserArrowIconWrap }
