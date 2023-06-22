import { useState } from 'react'
import styled from 'styled-components'
import { Down_Icon } from '../../../Components/Icons/Icons'
import { FlexBetweenCSS } from '../../../Styles/common'

function SelectBox() {
	const [isView, setIsView] = useState(false)
	const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	return (
		<S.Wrapper onClick={() => setIsView(!isView)}>
			<S.Title isView={isView}>
				<div>비율</div>
				<span>
					<Down_Icon />
				</span>
			</S.Title>
			<S.Box>{isView && num.map(el => <S.List>{el}</S.List>)}</S.Box>
		</S.Wrapper>
	)
}
export default SelectBox

const Wrapper = styled.div`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};
	padding: 1.6rem;
	border-radius: 0.4rem;

	position: relative;
	font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
`
const Title = styled.div`
	${FlexBetweenCSS}
	margin-bottom: 0.5rem;
	& > div {
	}
	& > span {
		transform: ${({ isView }) => isView && 'rotate(180deg)'};
		transition: all linear 0.2s;
	}
`
const Box = styled.ul``
const List = styled.li`
	padding: 1rem 0 0.5rem 0;
`

const S = { Wrapper, Title, Box, List }
