import { useState } from 'react'
import styled from 'styled-components'
import { FlexBetweenCSS } from '../../../../Styles/common'
import { DownIcon } from '../../../../Icons/Icons'
import { Controller } from 'react-hook-form'
import HookFormError from '../../../../Components/Error/HookFormError'

//보류
interface SelectData {
	value: string
	text: any
}
interface SelectInputProps {
	// Data: SelectData[]
	name: string
	control: any
	Data: any[]
	errorMsg: string
}

function SelectInput(props: SelectInputProps) {
	const { name, Data, control, errorMsg } = props
	const [isView, setIsView] = useState(false)

	return (
		<Controller
			name={name}
			control={control}
			rules={{
				required: errorMsg,
			}}
			render={({ field, fieldState: { error } }) => (
				<>
					<S.Wrapper onClick={() => setIsView(!isView)}>
						<S.Title isView={isView} status={field.value === undefined}>
							<div>
								{field.value === undefined ? '선택해 주세요' : field.value}
							</div>
							<span>
								<DownIcon />
							</span>
						</S.Title>
						{isView && (
							<S.Box>
								{Data.map((data, idx) => (
									<S.List
										key={idx}
										value={data.value}
										onClick={() => field.onChange(data.text)}
									>
										{data.text}
									</S.List>
								))}
							</S.Box>
						)}
					</S.Wrapper>
					<span>
						{error && (
							<HookFormError>{error.message?.toString()}</HookFormError>
						)}
					</span>
				</>
			)}
		/>
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
const Title = styled.div<{ status: boolean; isView: boolean }>`
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
	:hover {
		background-color: ${({ theme }) => theme.COLOR.sub};
		transition: all linear 0.3s;
	}
`

const S = { Wrapper, Title, Box, List }
