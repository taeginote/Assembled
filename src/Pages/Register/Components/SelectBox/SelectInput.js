import { useState } from 'react'
import styled from 'styled-components'
import { Down_Icon } from '../../../../Components/Icons/Icons'
import { FlexBetweenCSS } from '../../../../Styles/common'

function SelectInput(props) {
	const { Data, errors, field, ...rest } = props
	const [isView, setIsView] = useState(false)
	const [selectVal, setSelectVal] = useState(null)

	const onClickSelect = data => {
		field.onChange(data.value)
		setSelectVal(data.text)
	}
	return (
		<S.Wrapper onClick={() => setIsView(!isView)}>
			<S.Title isView={isView} status={field.value === undefined}>
				<div>{selectVal === null ? '선택해 주세요' : selectVal}</div>
				<span>
					<Down_Icon />
				</span>
			</S.Title>
			{isView && (
				<S.Box>
					{Data.map((data, idx) => (
						<S.List
							key={idx}
							value={data.value}
							onClick={() => onClickSelect(data)}
						>
							{data.text}
						</S.List>
					))}
				</S.Box>
			)}
		</S.Wrapper>
	)
}
export default SelectInput

const Wrapper = styled.div`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};
	padding-left: 1rem;
	border-radius: 0.4rem;

	position: relative;
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
`
const Title = styled.div`
	${FlexBetweenCSS}
	margin-bottom: 0.5rem;
	& > div {
		color: ${({ theme, status }) =>
			status ? theme.COLOR.common.gray[200] : 'black'};
	}
	& > span {
		transform: ${({ isView }) => isView && 'rotate(180deg)'};
		transition: all linear 0.2s;
		margin: 0.5rem 0.5rem 0 0;
	}
`
const Box = styled.ul`
	position: absolute;
	background-color: white;
	width: 100%;
	z-index: 100000;
	right: 0;

	border: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};
`
const List = styled.li`
	padding: 1rem 0 0.5rem 1rem;
	:hover {
		background-color: ${({ theme }) => theme.COLOR.sub};
		transition: all linear 0.3s;
	}
`

const S = { Wrapper, Title, Box, List }
