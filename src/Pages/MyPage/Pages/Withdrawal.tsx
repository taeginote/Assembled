import styled from 'styled-components'
import { FlexColumnCSS } from '../../../Styles/common'
import Button from '../../../Components/Button/Button'
import { Warning_Icon } from '../../../Icons/Icons'

function Withdrawal() {
	return (
		<S.Wrapper>
			<Warning_Icon size={'80'} />
			<div>
				<span>Assemble</span> 탈퇴를 하시면 회원정보, 가입하신 그룹, 등록
				게시글이 전체 삭제 후 복구하실 수 없습니다. 정말로 탈퇴를 원하신다면
				회원탈퇴 버튼을 눌러주세요
			</div>
			<span>
				<Button>회원탈퇴</Button>
			</span>
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
