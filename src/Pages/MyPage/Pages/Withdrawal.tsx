import styled from 'styled-components'
import { FlexColumnCSS } from '../../../Styles/common'
import Button from '../../../Components/Button/Button'
import { WarningIcon } from '../../../Icons/Icons'
import { useState } from 'react'
import SuccessModal from '../../../Components/Modal/successModal'
import { useMutation } from '@tanstack/react-query'
import UserApi from '../../../Apis/UserApi'
import { useAuth } from '../../../Contexts/auth'
import { modalViewConfirm } from '../../../Atoms/modalViewConfirm.atom'
import { useRecoilState } from 'recoil'
import ConfirmModal from '../../../Components/Modal/confirmModal'

function Withdrawal() {
	const [recoilCounter, setRecoilCounter] = useRecoilState(modalViewConfirm)
	const [modalView, setModalView] = useState(false)
	const auth = useAuth()

	const { mutate } = useMutation(() => UserApi.deletewithdrawal(), {
		onSuccess: () => {
			setModalView(true)
			auth.logout()
			alert(
				'지금까지 어셈블을 이용해주셔서 감사합니다~\n 언제든지 저희와 함께한 추억을 회상하거나 다시 찾아오실 수 있습니다.',
			)
		},
		onError: () => {},
	})

	const onWithdrawal = () => {
		setRecoilCounter(true)
		document.body.style.overflow = 'hidden'
	}
	return (
		<S.Wrapper>
			<WarningIcon size={'80'} />
			<div>
				<span>Assemble</span> 탈퇴를 하시면 회원정보, 가입하신 그룹, 등록
				게시글이 전체 삭제 후 복구하실 수 없습니다. 정말로 탈퇴를 원하신다면
				회원탈퇴 버튼을 눌러주세요
			</div>
			<span>
				<Button onClick={onWithdrawal}>회원탈퇴</Button>
			</span>

			{modalView && (
				<SuccessModal
					text={'회원탈퇴 성공'}
					url={'/myPage/withdrawal'}
					setState={setModalView}
				/>
			)}
			{recoilCounter && (
				<ConfirmModal
					text={'정말로 회원탈퇴하시나요?'}
					url={'/'}
					mutate={mutate}
				/>
			)}
		</S.Wrapper>
	)
}
export default Withdrawal

const Wrapper = styled.div`
	${FlexColumnCSS}
	width: 65%;
	text-align: center;
	line-height: 5rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
	margin-top: 5rem;
	align-items: center;
	margin-left: 20%;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 90%;
		text-align: center;
		margin-left: 2rem;
	}
	& > div {
		margin-top: 3rem;
		& > span {
			color: ${({ theme }) => theme.COLOR.hover};
			font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
			font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
		}
	}
	& > span {
		margin-top: 5rem;
		width: 50%;
	}
`

const S = { Wrapper }
