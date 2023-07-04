import styled from 'styled-components'

function Comment() {
	return (
		<S.Wrapper>
			여기는 내가 쓴 댓글 보는곳<div>(준비중)</div>
		</S.Wrapper>
	)
}
export default Comment

const Wrapper = styled.div`
	font-size: 40px;
	text-align: center;
`

const S = { Wrapper }
