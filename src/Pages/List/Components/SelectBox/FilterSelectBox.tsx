import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { DownIcon } from '../../../../Icons/Icons'

type eventType = {
	name: string
	url: string
}
function FilterSelectBox() {
	const navigate = useNavigate()
	const [isShowOptions, setShowOptions] = useState<boolean>(false)

	const [searchParams] = useSearchParams()
	let filter: string | null = searchParams.get('sort')
	let category: number | null = Number(searchParams.get('category'))

	if (category === null) {
		category = 1
	}
	if (filter === null) {
		filter = 'total'
	}

	const FilterArr: eventType[] = [
		{
			name: '최신 순 정렬',
			url: 'total',
		},
		{
			name: '인기 순 정렬 (조회 수)',
			url: 'popular',
		},
		{
			name: '좋아요 순 정렬',
			url: 'like',
		},
	]
	const text = FilterArr.find(el => el.url === filter)

	const onClickSelectFilter = (e: eventType) => {
		navigate(`?category=${category}&sort=${e.url}`)
	}

	return (
		<SelectBox onClick={() => setShowOptions(prev => !prev)}>
			<Button>{text?.name}</Button>
			<IconBox $isShowOptions={isShowOptions}>
				<DownIcon />
			</IconBox>
			{isShowOptions && (
				<SelectOptions>
					{FilterArr.map((el: eventType, idx: number) => (
						<Option
							onClick={() => onClickSelectFilter(el)}
							$select={el.url === filter}
							key={idx}
						>
							{el.name}
						</Option>
					))}
				</SelectOptions>
			)}
		</SelectBox>
	)
}
export default FilterSelectBox

const SelectBox = styled.div`
	position: relative;
	max-width: 20rem;
	margin-left: 1.5rem;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		margin-top: 3rem;
		margin-left: 0;
	}
`
const Button = styled.button`
	width: 20rem;
	border: 1px solid #c4c4c4;
	box-sizing: border-box;
	border-radius: 8px;

	padding: 10.8px 13px;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	line-height: 16px;
	text-align: left;
	background: #ffffff;
	color: ${({ theme }) => theme.COLOR.common.gray[200]};
	&:focus {
		border: 1px solid ${({ theme }) => theme.COLOR.hover};
		border-radius: 10px;
		outline: 1px solid ${({ theme }) => theme.COLOR.hover};
		border-radius: 10px;
	}
`
const SelectOptions = styled.ul`
	width: 20rem;
	list-style: none;
	border: 1px solid #c4c4c4;
	box-sizing: border-box;
	box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
	margin-top: 0.9rem;
	position: absolute;
	background-color: #ffffff;
`
const Option = styled.li<{ $select: boolean }>`
	border: none;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	line-height: 1.6rem;
	padding: 0.6rem 1rem;
	margin: 0.5rem 0.7rem;
	box-sizing: border-box;
	color: ${({ theme, $select }) => $select && theme.COLOR.hover};
	font-family: ${({ theme, $select }) => $select && theme.FONT_WEIGHT.bold};
	:hover {
		background-color: ${({ theme }) => theme.COLOR.orange};
		border-radius: 5px;
	}
`
const IconBox = styled.div<{ $isShowOptions: boolean }>`
	position: absolute;
	right: 0.7rem;
	top: 0.5rem;
	transform: ${({ $isShowOptions }) => $isShowOptions && 'rotate(180deg)'};
	top: ${({ $isShowOptions }) => $isShowOptions && '0.1rem'};
	transition: all linear 0.2s;
	margin: 0.2rem 0.5rem 0 0;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		top: 0.4rem;
		left: 15.5rem;
		transition: none;
		transform: ${({ $isShowOptions }) => $isShowOptions && 'none'};
	}
`
