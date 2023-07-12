import styled from 'styled-components'
import { FlexColumnCSS } from '../../../Styles/common'

function Comment() {
	const list: number[] = [1, 2, 3, 4, 1]
	return (
		<S.Wrapper>
			{list.map(el => (
				<S.container>dsa</S.container>
			))}
		</S.Wrapper>
	)
}
export default Comment

const Wrapper = styled.div`
	text-align: center;
	width: 100%;
	${FlexColumnCSS}
	align-items: center;
`
const container = styled.div`
	border: 1px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	width: 80%;
	height: 8rem;
	border-radius: 1rem;
	margin-bottom: 1rem;
	box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem
		${({ theme }) => theme.COLOR.common.gray[400]};
	&:hover {
		transform: scale(1.02);
		transition: transform 0.5s;
	}
`
const S = { Wrapper, container }
