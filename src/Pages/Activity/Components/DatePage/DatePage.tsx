import { styled } from 'styled-components'
import DateViewComponents from './DateViewComponents'
import { BigPlusIcon } from '../../../../Icons/Icons'

function DatePage() {
	return (
		<S.Wrapper>
			<S.Title>달력</S.Title>
			<S.Date>
				<DateViewComponents />
			</S.Date>
			<S.AddBtn>
				<BigPlusIcon />
			</S.AddBtn>
		</S.Wrapper>
	)
}
export default DatePage

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
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
const AddBtn = styled.div`
	background: ${({ theme }) => theme.COLOR.orange};
	position: absolute;
	padding: 1rem;
	border-radius: 50%;
	&:hover {
		scale: 1.1;
		background: ${({ theme }) => theme.COLOR.sub};
	}
	right: 10%;
`
const S = { Wrapper, Date, Title, AddBtn }
