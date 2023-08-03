import { useState } from 'react'
import styled from 'styled-components'
import { FlexBetweenCSS } from '../../../../Styles/common'
import { DownIcon } from '../../../../Icons/Icons'
import { Control, Controller, FieldValues } from 'react-hook-form'
import HookFormError from '../../../../Components/Error/HookFormError'

interface Option {
	value?: number
	text?: string
}
interface CategoryOption extends Option {
	categoryId?: number
	categoryName?: string
}
interface SelectInputProps {
	name: string
	control: Control<FieldValues>
	Data: CategoryOption[]
	errorMsg: string
	datailData?: string | number
	postId?: string
}

function SelectInput(props: SelectInputProps) {
	const { name, Data, control, errorMsg, datailData, postId } = props

	const [isView, setIsView] = useState<boolean>(false)
	const initialValue = datailData ? datailData : undefined

	return (
		<>
			<Controller
				name={name}
				control={control}
				defaultValue={initialValue}
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
											onClick={() =>
												field.onChange(
													name === 'Category' ? data.categoryName : data.value,
												)
											}
										>
											{name == 'Category' ? data.categoryName : data.text}
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
			{/* )} */}
		</>
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
	padding: 0.3rem;
	&:hover {
		background-color: ${({ theme }) => theme.COLOR.sub};
		transition: all linear 0.3s;
	}
`

const S = { Wrapper, Title, Box, List }
