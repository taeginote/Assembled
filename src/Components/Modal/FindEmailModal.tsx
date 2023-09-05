import styled from 'styled-components'
import { FlexBetweenCSS, FlexCenterCSS } from '../../Styles/common'
import Input from '../Input/Input'
import { Cancel_big_Icon, Name_Icon, Phone_Icon } from '../../Icons/Icons'
import { FlexAlignCSS } from '../../Styles/common'
import { FlexColumnCSS } from '../../Styles/common'
import Button from '../Button/Button'
import { useState } from 'react'

interface FindEmailModalTypeProps {
	setModalView: (state: boolean) => void | undefined
}

function FindEmailModal({ setModalView }: FindEmailModalTypeProps) {
	const [nameAndPhoneVal, setNameAndPhoneVal] = useState<{
		name: string | null
		phone: string | null
	}>({
		name: null,
		phone: null,
	})
	const onFindEmail = () => {}

	console.log(nameAndPhoneVal)

	return (
		<S.Wrapper>
			<S.Box>
				<S.TitleHead>
					<h4>이메일 찾기</h4>
					<div>
						<Cancel_big_Icon onClick={() => setModalView(false)} />
					</div>
				</S.TitleHead>
				<S.InputWrap>
					<Name_Icon />
					<Input
						placeholder="이름"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setNameAndPhoneVal(prev => ({
								...prev,
								name: e.target.value,
							}))
						}
					/>
				</S.InputWrap>

				<S.InputWrap>
					<Phone_Icon />
					<Input
						placeholder="전화번호"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setNameAndPhoneVal(prev => ({
								...prev,
								phone: e.target.value,
							}))
						}
					/>
				</S.InputWrap>

				<S.ButtonWrap>
					<Button onClick={onFindEmail}>이메일 찾기</Button>
				</S.ButtonWrap>
			</S.Box>
		</S.Wrapper>
	)
}
export default FindEmailModal

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.4);
	${FlexCenterCSS}
`
const Box = styled.div`
	width: 45rem;
	${FlexColumnCSS}
	align-items: center;
	padding: 2rem 0;
	text-align: center;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.COLOR.common.white};

	animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
	position: fixed;
	@keyframes fadeIn {
		0% {
			top: -20rem;
		}

		100% {
			top: 40%;
		}
	}
`

const TitleHead = styled.div`
	margin: 0 2.1rem 2rem 2.1rem;
	width: 90%;
	${FlexBetweenCSS}
	&>div {
		cursor: pointer;
	}
`
const InputWrap = styled.div`
	${FlexAlignCSS}
	width: 90%;
	border-bottom: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};
	margin-bottom: 0.5rem;
`
const ButtonWrap = styled.div`
	width: 90%;
	margin-top: 2rem;
`

const S = { Wrapper, Box, InputWrap, TitleHead, ButtonWrap }
