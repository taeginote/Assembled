import { styled } from 'styled-components'
import {
	ColumnNumberCSS,
	FlexCenterCSS,
	GridCenterCSS,
} from '../../../Styles/common'
import Pagination from '../../../Components/Pagination/Pagination'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ActivityItemBox from '../Components/ActivityItemBox'
import useGetActivityData from '../../../Hooks/Queries/get-activity'
import { Content } from '../../../Hooks/Queries/get-list'
import CardSkeleton from '../../../Components/Skeleton/CardSkeleton'
import MyPageListNoData from '../../../Error/MypageListNoData'

function Activity() {
	const [searchParams] = useSearchParams()
	let pageNumber: number | null = Number(searchParams.get('page'))
	const [page, setPage] = useState<number>(pageNumber || 1)

	const { data, isLoading } = useGetActivityData(page)

	const loadingArr: 0[] = Array(4).fill(0)

	return (
		<S.Wrapper>
			<S.ListWrap>
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
									<ActivityItemBox data={el} key={idx} />
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
