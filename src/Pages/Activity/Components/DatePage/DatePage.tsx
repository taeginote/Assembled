import { styled } from 'styled-components'
import DateViewComponents from './DateViewComponents'

function DatePage() {
	return (
		<S.Wrapper>
			<S.Title>달력</S.Title>
			<S.Date>
				<DateViewComponents />
			</S.Date>
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
