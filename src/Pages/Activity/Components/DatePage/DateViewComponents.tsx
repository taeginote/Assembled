import { styled } from 'styled-components'
import { Arrow_Icon } from '../../../../Icons/Icons'
import { FlexCenterCSS } from '../../../../Styles/common'
import { useState } from 'react'

function DateViewComponents() {
	let date: Date = new Date() //현 날짜 시간
	const [currentMonth, setCurrentMonth] = useState<number>(date.getMonth() + 1)
	const [currentYear, setCurrentYear] = useState<number>(date.getFullYear())

	let lastDayOfMonthDate = new Date(currentYear, currentMonth, 0).getDate() //이번 달 마지막 일자 ex) 30
	let lastDayOfMonthDay = new Date(currentYear, currentMonth, 0).getDay() //이번 달 마지막 일자 요일 ex)일요일

	let monthArr: (number | null)[][] = [[], [], [], [], []]
	let totalDate = lastDayOfMonthDate

	//마지막 주
	for (let lastWeek = lastDayOfMonthDay; lastWeek >= 0; lastWeek--) {
		monthArr[4].unshift(totalDate)
		totalDate -= 1
	}

	//중간 주
	for (let middleOfMonth = 3; middleOfMonth >= 1; middleOfMonth--) {
		for (let week = 7; week >= 1; week--) {
			monthArr[middleOfMonth].unshift(totalDate)
			totalDate -= 1
		}
	}

	//첫 주
	for (let fistWeek = 7; fistWeek >= 1; fistWeek--) {
		if (totalDate === 0) {
			monthArr[0].unshift(null)
		} else {
			monthArr[0].unshift(totalDate)
			totalDate -= 1
		}
	}

	const onPrevious = () => {
		//월 previous
		let month = currentMonth
		month -= 1
		if (month === 0)
			return setCurrentMonth(12), setCurrentYear(prev => (prev -= 1))
		setCurrentMonth(prev => (prev -= 1))
	}
	const onNext = () => {
		//월 next
		let month = currentMonth
		month += 1
		if (month === 13)
			return setCurrentMonth(1), setCurrentYear(prev => (prev += 1))
		setCurrentMonth(prev => (prev += 1))
	}

	return (
		<S.Wrapper>
			<h1>{currentYear}</h1>
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
				{monthArr.map((month, idx: number) => (
					<tr key={idx}>
						{month.map((day, idx: number) => (
							<S.Th
								key={idx}
								$isStatus={
									date.getMonth() + 1 === currentMonth && date.getDate() === day
								}
							>
								{day}
							</S.Th>
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
	& > h1 {
		text-align: center;
	}
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
`
const FirstTh = styled.th`
	vertical-align: top;
	width: 10rem;
	height: 3rem;
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`
const Th = styled.th<{ $isStatus: boolean }>`
	&:hover {
		background-color: ${({ theme }) => theme.COLOR.sub};
	}
	vertical-align: top;
	width: 10rem;
	height: 8rem;
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	background-color: ${({ theme, $isStatus }) => $isStatus && theme.COLOR.sub};
`

const S = { Wrapper, Month, Table, Th, FirstTh }
