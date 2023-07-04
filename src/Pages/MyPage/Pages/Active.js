import styled from 'styled-components'

function Active() {
	return (
		<S.Wrapper>
			여기는 활동중인 모임을 볼수있는 곳입니다.<div>(준비중)</div>
		</S.Wrapper>
	)
}
export default Active

const Wrapper = styled.div`
	font-size: 40px;
	text-align: center;
`

const S = { Wrapper }
