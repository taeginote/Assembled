import { styled } from 'styled-components'
import {
	ColumnNumberCSS,
	FlexCenterCSS,
	GridCenterCSS,
} from '../../../Styles/common'
import Pagination from '../../../Components/Pagination/Pagination'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MyPageListNoData from '../../../Error/MypageListNoData'
import useGetMyJoinRequestListData from '../../../Hooks/Queries/get-myjoinRequestList'
import CardSkeleton from '../../../Components/Skeleton/CardSkeleton'
import JoinRequestItemBox from '../Components/JoinRequestItemBox'

function JoinRequest() {
	//디자인을 위한 test Mock
	const [searchParams] = useSearchParams()
	let pageNumber: number | null = Number(searchParams.get('page'))
	const [page, setPage] = useState<number>(pageNumber || 0)

	const loadingArr: 0[] = Array(12).fill(0)

	const { data, isLoading } = useGetMyJoinRequestListData(page)

	return (
		<S.Wrapper>
			{data?.response?.content?.length === 0 ? (
				<S.ListWrap>
					<MyPageListNoData comment={'가입신청한 모임이 없습니다.'} />
				</S.ListWrap>
			) : (
				<>
					<S.ListWrap>
						<p>내가 가입 신청한 모임</p>
						<>
							{isLoading ? (
								<S.Container>
									{loadingArr.map((el: 0, idx: number) => (
										<CardSkeleton key={idx} />
									))}
								</S.Container>
							) : (
								<>
									<S.Container>
										{data?.response?.content?.map((el, idx: number) => (
											<JoinRequestItemBox data={el} key={idx} />
										))}
									</S.Container>
									<Pagination
										totalPage={data!.response.totalPages}
										limit={10}
										scroll={765}
										setPage={setPage}
									/>
								</>
							)}
						</>
					</S.ListWrap>
				</>
			)}
		</S.Wrapper>
	)
}
export default JoinRequest

const Wrapper = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	width: 80%;
	border-radius: 0.7rem;
	${FlexCenterCSS}
	&>div {
		text-align: center;
		/* line-height: 2.1; */
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 90%;
	}
`
const ListWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 15rem;
	width: 80%;

	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		margin-left: 4.5rem;
	}
	& > p {
		width: 118%;
		text-align: start;
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		margin-bottom: 2rem;
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
const S = { ListWrap, Container, Wrapper }
