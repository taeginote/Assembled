import { styled } from 'styled-components'
import DateViewComponents from './DateViewComponents'

import DateModal from './DatePostModal'
import { useState } from 'react'
import DateDetailModal from './DateDetailModal'

function DatePage() {
	const [isModalView, setIsModalView] = useState<boolean>(false)
	const [isDateDetailModal, setIsDateDetailModal] = useState<boolean>(false)
	const [selectDay, setSelectDay] = useState<string | null>(null)
	const [selectDetailId, setSelectDetailId] = useState<number | null>(null)
	return (
		<S.Wrapper>
			<S.Title>달력</S.Title>
			<S.Date>
				<DateViewComponents
					setIsModalView={setIsModalView}
					setSelectDay={setSelectDay}
					isModalView={isModalView}
					setIsDateDetailModal={setIsDateDetailModal}
					setSelectDetailId={setSelectDetailId}
				/>
			</S.Date>

			{isModalView && (
				<DateModal setState={setIsModalView} selectDay={selectDay} />
			)}
			{isDateDetailModal && (
				<DateDetailModal
					setState={setIsDateDetailModal}
					selectDay={selectDay}
					selectDetailId={selectDetailId}
					setSelectDetailId={setSelectDetailId}
				/>
			)}
		</S.Wrapper>
	)
}
export default DatePage

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`
const Date = styled.div`
	width: 100%;
`
const Title = styled.div`
	width: 100%;
	border-bottom: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	padding: 1rem 0 1rem 2rem;
`

const S = { Wrapper, Date, Title }
