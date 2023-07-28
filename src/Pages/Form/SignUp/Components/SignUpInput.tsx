import { Controller } from 'react-hook-form'
import Input from '../../../../Components/Input/Input'
import { Email_Icon } from '../../../../Icons/Icons'
import { HookFormRule } from '../../../../Consts/HookFormRule'
import HookFormError from '../../../../Components/Error/HookFormError'
import { styled } from 'styled-components'
import { FlexAlignCSS } from '../../../../Styles/common'

//보류 Yup 사용하기
interface SingUpInputProps {
	name: string
	control: any
	errorRules: any
	Icon?: React.ReactNode
	placeholder: string
}

function SignUpInput(props: SingUpInputProps) {
	const { name, control, errorRules, Icon, placeholder } = props

	return (
		<Controller
			name={name}
			control={control}
			rules={errorRules}
			render={({ field, fieldState: { error } }) => (
				<S.Wrapper>
					<span>
						{Icon}
						<Input
							placeholder={placeholder}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								field.onChange(e.target.value)
							}
						/>
					</span>
					{error && <HookFormError>{error.message?.toString()}</HookFormError>}
				</S.Wrapper>
			)}
		/>
	)
}
export default SignUpInput

const Wrapper = styled.div`
	width: 100%;
	span {
		${FlexAlignCSS}
		width: 100%;
		margin-bottom: 1rem;
		border-bottom: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};
	}
`

const S = {
	Wrapper,
}
