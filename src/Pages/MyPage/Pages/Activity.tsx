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

function Activity() {
	//디자인을 위한 test Mock
	const testArr: number[] = [1, 1, 1]
	const testObject = {
		categoryName: '개발/프로그래밍',
		contents:
			'안녕하세요\n\n안녕하세요\n\n\n안녕하세요\n\n안녕하세요\n안녕하세요\n\n',
		expectedPeriod: '2',
		hits: 0,
		likeStatus: false,
		likes: 0,
		personnelNumber: '2',
		postId: 128,
		postProfileImages: [],
		postStatus: 'PROGRESS',
		title: '안녕하세요',
		writerId: 86,
		writerNickname: 'taek11',
	}

	const [searchParams] = useSearchParams()
	let pageNumber: number | null = Number(searchParams.get('page'))
	const [page, setPage] = useState<number>(pageNumber || 0)

	return (
		<S.Wrapper>
			<S.ListWrap>
				<p>내가 활동중인 모임 (준비중)</p>

				{testArr.map((el, idx: number) => (
					<ActivityItemBox data={testObject} key={idx} />
				))}

				<Pagination totalPage={1} limit={10} scroll={765} setPage={setPage} />
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
		background-color: red;
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
