import styled from 'styled-components'

function Wrote() {
	return (
		<S.Wrapper>
			여기는 내가 작성한 글<div>(준비중)</div>
		</S.Wrapper>
	)
}
export default Wrote

const Wrapper = styled.div`
	font-size: 40px;
	text-align: center;
`

const S = { Wrapper }
