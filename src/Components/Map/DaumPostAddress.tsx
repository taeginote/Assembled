import React from 'react'
import DaumPostcode from 'react-daum-postcode'
import { styled } from 'styled-components'
import { FlexCenterCSS } from '../../Styles/common'
import { Cancel_big_Icon } from '../../Icons/Icons'
import { FlexBetweenCSS } from '../../Styles/common'
import { FlexColumnCSS } from '../../Styles/common'
import { ResultAddressType } from '../../Pages/Register/Register'

interface MapModalPropType {
	setModalView: (state: boolean) => void | undefined
	setResultModal: (state: ResultAddressType) => void | undefined
}
const DaumPostAddress = ({
	setModalView,
	setResultModal,
}: MapModalPropType) => {
	const completeHandler = (data: any) => {
		setResultModal({
			zipCode: data.zonecode,
			roadNameAddress: data.roadAddress,
			lotNumberAddress: data.jibunAddress,
			detailAddress: data.address,
		})
		setModalView(false)
	}
	//zipCode => zonecode 우편번호
	//roadNameAddress  =>roadAddress 도로명 주소
	//lotNumberAddress  =>jibunAddress 지번 주소
	//detailAddress  =>address 상세 주소
	return (
		<S.Wrapper>
			<S.Box>
				<S.Top>
					<div>모임 활동 지역</div>
					<Cancel_big_Icon onClick={() => setModalView(false)} />
				</S.Top>
				<DaumPostcode onComplete={completeHandler} />
			</S.Box>
		</S.Wrapper>
	)
}

export default DaumPostAddress

const Wrapper = styled.div`
	position: fixed;
	top: -3rem;
	left: 0;
	height: 200vh;
	width: 100%;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.4);
	${FlexCenterCSS}
`

const Box = styled.div`
	width: 45rem;
	padding: 2rem 0;
	text-align: center;
	${FlexColumnCSS}
	align-items: center;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.COLOR.common.white};
	& > span {
		* {
			margin: 0 1rem;
		}
	}
	animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
	position: fixed;
	@keyframes fadeIn {
		0% {
			top: -20rem;
		}

		100% {
			top: 30%;
		}
	}
`

const Top = styled.div`
	${FlexBetweenCSS}
	width: 95%;
	margin-bottom: 0.5rem;
`
const S = { Wrapper, Box, Top }
