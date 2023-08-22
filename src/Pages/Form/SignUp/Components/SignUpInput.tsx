import { Controller } from 'react-hook-form'
import Input from '../../../../Components/Input/Input'
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
	onValidation?: any
	data?: string
}

function SignUpInput(props: SingUpInputProps) {
	const { name, control, errorRules, Icon, placeholder, onValidation, data } =
		props

	return (
		<Controller
			name={name}
			control={control}
			rules={errorRules}
			defaultValue={data}
			render={({ field, fieldState: { error } }) => (
				<S.Wrapper>
					<span>
						{Icon}
						<Input
							type={name === 'SignUpPw' ? 'password' : 'text'}
							maxlength={
								(name === 'SignUpBirthday' && 8) ||
								(name === 'SignUpPhone' && 11)
							}
							placeholder={placeholder}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								field.onChange(e.target.value)
							}
							defaultValue={data}
						/>

						{(name === 'SignUpEmail' || name === 'SignUpNickName') && (
							<S.ValidationBtn
								type="button"
								value="중복확인"
								onClick={() => onValidation(name)}
							/>
						)}
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
const ValidationBtn = styled.input`
	width: 10rem;
	padding: 0.6rem 0;
	border: none;
	border-radius: 0.4rem;
	background: ${({ theme }) => theme.COLOR.sub};
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	color: ${({ theme }) => theme.COLOR.common.white};
	&:hover {
		background: ${({ theme }) => theme.COLOR.hover};
	}
`

const S = {
	Wrapper,
	ValidationBtn,
}
