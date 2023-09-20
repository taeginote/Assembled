import { styled } from 'styled-components'
import { Arrow_Icon } from '../../../../Icons/Icons'
import { FlexCenterCSS } from '../../../../Styles/common'
import { useState } from 'react'

function DateViewComponents() {
	let date: Date = new Date() //현 날짜 시간
	let today: number = date.getDate() //today
	let [currentMonth, setCurrentMonth] = useState<number>(date.getMonth() + 1) //currentMonth는 0부터 시작 그래서 +1해줘야함
	let [currentYear, setCurrentYear] = useState<number>(date.getFullYear()) //이번년도

	const onPrevious = () => {
		//월 previous
	}
	const onNext = () => {
		//월 next
	}

	const testArr = [
		[1, 2, 3, 4, 5, 6, 7],
		[8, 9, 10, 11, 12, 13, 14],
		[15, 16, 17, 18, 19, 20, 21],
		[22, 23, 24, 25, 26, 27, 28],
	]
	//일단 달력을 위해서는 주단위 큰 배열 아래 0,1,2,3 안에 일이 들어가야한다.
	//즉, 두개의 배열에서 도는 형식 제일 큰거는 tr을 생성하고 그 아래는 th

	return (
		<S.Wrapper>
			<S.Month>
				<Arrow_Icon rotate={180} onClick={onPrevious} />
				<div>{currentMonth}월달</div>
				<Arrow_Icon rotate={0} onClick={onNext} />
			</S.Month>
			<S.Table>
				<tr>
					<S.FirstTh>일요일</S.FirstTh>
					<S.FirstTh>월요일</S.FirstTh>
					<S.FirstTh>화요일</S.FirstTh>
					<S.FirstTh>수요일</S.FirstTh>
					<S.FirstTh>목요일</S.FirstTh>
					<S.FirstTh>금요일</S.FirstTh>
					<S.FirstTh>토요일</S.FirstTh>
				</tr>
				{testArr.map((month, idx: number) => (
					<tr key={idx}>
						{month.map((day, idx: number) => (
							<S.Th>{day}</S.Th>
						))}
					</tr>
				))}
			</S.Table>
		</S.Wrapper>
	)
}
export default DateViewComponents

const Wrapper = styled.div`
	margin-top: 5rem;
`
const Month = styled.div`
	width: 100%;
	text-align: center;
	margin: 2rem 0;
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	${FlexCenterCSS}
	&>div {
		margin: 1rem 4rem;
	}
`
const Table = styled.table`
	margin: auto;
	/* border-top: 1px solid black; */
	/* border-left: 1px solid black; */
`
const FirstTh = styled.th`
	vertical-align: top;
	width: 10rem;
	height: 3rem;
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`
const Th = styled.th`
	&:hover {
		background-color: ${({ theme }) => theme.COLOR.sub};
	}
	vertical-align: top;
	width: 10rem;
	height: 8rem;
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`

const S = { Wrapper, Month, Table, Th, FirstTh }
