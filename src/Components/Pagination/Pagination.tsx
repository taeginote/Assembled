import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import scrollToTop from '../../Utils/scrollToTop'
import { FlexCenterCSS } from '../../Styles/common'
import { PaginationArrowSingle_Icon } from '../../Icons/Icons'
import { PaginationType } from '../../Types/type'

/**
 * @param limit - 페이지네이션 몇 개씩 할 것인지
 * @param totalPage -  총 페이지 갯수
 * @param setPage - page 관련 state를 변경시키는 로직의 함수
 * @param scroll - 페이지네이션 클릭 시 이동될 위치
 * @사용예시 - `<Pagination total={300} page={2} />`
 */
/*
	setPage는 page의 state를 변경시키는 함수이고,
	goPage는 쿼리 스트링만을 변경시키는 함수입니다.
*/

function Pagination({
	limit,
	totalPage,
	setPage,
	scroll,
}: PaginationType): JSX.Element {
	const [searchParams, setSearchParams] = useSearchParams()

	const nowPage: number | null = Number(searchParams.get('page') || 1)

	const startPage = Math.floor(nowPage / limit) * limit + 1
	let endPage = startPage + limit - 1
	if (endPage >= totalPage) endPage = totalPage

	const createArray = (start: number, end: number) => {
		return Array(end - start + 1)
			.fill(false)
			.map((_, i) => start + i)
	}

	const goPage = (number: number) => {
		setPage(number)
		// 기존 쿼리 스트링을 유지
		const queryString = new URLSearchParams()
		if (searchParams.toString()) {
			searchParams
				.toString()
				.split('&')
				.forEach((query: string) => {
					const [key, value]: string[] = query.split('=')
					queryString.set(key, value)
				})
		}
		queryString.set('page', number.toString())
		setSearchParams(queryString)
	}

	return (
		<S.Nav>
			<S.Button
				onClick={() => {
					goPage(1)
					scrollToTop(scroll)
				}}
				disabled={nowPage === 1}
				title="Pagination Left"
			>
				<PaginationArrowSingle_Icon rotate={180} />
			</S.Button>
			{createArray(startPage, endPage).map((_, i) => (
				<S.NumBtn
					key={i}
					onClick={() => {
						goPage(i + startPage)
						scrollToTop(scroll)
					}}
					aria-current={nowPage === i + startPage ? 'page' : undefined}
				>
					{i + startPage}
				</S.NumBtn>
			))}
			<S.Button
				onClick={() => {
					goPage(totalPage)
					scrollToTop(scroll)
				}}
				disabled={nowPage === totalPage}
				title="Pagination Right"
			>
				<PaginationArrowSingle_Icon />
			</S.Button>
		</S.Nav>
	)
}

const Nav = styled.nav`
	${FlexCenterCSS}
	gap: 4px;
	margin: 6rem 0;
`

const Button = styled.button<{ disabled: boolean }>`
	padding: 0.6rem;
	border-radius: 0.6rem;
	margin: 0 0.2rem;
	font-size: 1.5rem;
	background-color: ${({ theme }) => theme.COLOR.common.gray[100]};
	&:hover {
		background-color: ${({ theme }) => theme.COLOR.common.gray[400]};
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}

	&[disabled] {
		background-color: ${({ theme }) => theme.COLOR.common.gray[100]};
		cursor: revert;
		transform: revert;
	}
`

const NumBtn = styled.button`
	margin: 0 1rem;
	border: none;
	font-size: 1.3rem;
	background-color: ${({ theme }) => theme.COLOR.common.white};
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.COLOR.main};
		border-bottom: 1px solid ${({ theme }) => theme.COLOR.main};
	}

	&[aria-current] {
		color: ${({ theme }) => theme.COLOR.main};
		font-weight: bold;
		cursor: revert;
		transform: revert;
	}
`

const S = {
	Nav,
	Button,
	NumBtn,
}

export default Pagination
