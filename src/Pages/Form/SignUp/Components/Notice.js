import styled from 'styled-components'
import { FlexCenterCSS } from '../../../../Styles/common'

function Notice() {
	return (
		<>
			<S.NoticeSec>
				가입 시,어셈블이 제공하는 모든 시스템을 이용해 보실수 있습니다.
				<br />
				회원가입에 사용된 개인정보는 오직 인증만을 위해 사용됩니다.
			</S.NoticeSec>
			<S.Container>
				<input type="radio" />
				<div>회원가입 유용한 채용 소식을 받아볼래요.</div>
			</S.Container>
		</>
	)
}
export default Notice

const NoticeSec = styled.div`
	margin-top: 2rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	color: ${({ theme }) => theme.COLOR.common.gray[300]};
`
const Container = styled.div`
	margin-top: 1.5rem;
	${FlexCenterCSS}
	& > div {
		font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
		color: ${({ theme }) => theme.COLOR.common.gray[300]};
	}
	& > input {
		appearance: none;
		border: 1.5px solid gainsboro;
		border-radius: 0.35rem;
		width: 2rem;
		height: 2rem;
		margin-right: 0.7rem;
		&:checked {
			border-color: transparent;
			background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
			background-size: 100% 100%;
			background-position: 50%;
			background-repeat: no-repeat;
			background-color: ${({ theme }) => theme.COLOR.main};
		}
	}
`

const S = { NoticeSec, Container }
