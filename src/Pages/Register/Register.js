import styled from 'styled-components'
import { TopPadding } from '../../Styles/common'

function Register() {
	// {
	//     "title": "제목",
	//     "contents": "내용",
	//     "category": "카테고리",
	//     "writer": "작성자",
	//     "personnelNumber": "5",
	//     "expectedPeriod": "1" // 달 기준
	// }
	return (
		<S.Wrapper>
			<S.Container>
				<S.Title>자유롭게 프로젝트 정보를 선택해주세요.</S.Title>
			</S.Container>
		</S.Wrapper>
	)
}
export default Register

const Wrapper = styled.div`
	${TopPadding}
	display: flex;
	justify-content: center;
`
const Container = styled.div`
	width: 60%;
	margin-top: 13rem;
`
const Title = styled.h3`
	padding-bottom: 3rem;
	border-bottom: 2px solid ${({ theme }) => theme.COLOR.common.gray[400]};
`
const S = { Container, Wrapper, Title }
