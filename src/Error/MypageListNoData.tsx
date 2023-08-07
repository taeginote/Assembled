import { styled } from 'styled-components'
import Button from '../Components/Button/Button'
import { useNavigate } from 'react-router-dom'

type PropsType = {
	comment: string
}
function MyPageListNoData({ comment }: PropsType) {
	const navigate = useNavigate()
	const reGet = () => {
		navigate('/')
	}
	return (
		<S.Wrapper>
			<div>{comment}</div>
			<S.StyleButton onClick={reGet}>전체 모임 보기</S.StyleButton>
		</S.Wrapper>
	)
}
export default MyPageListNoData

const Wrapper = styled.div`
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.large};
	height: 100%;
	margin: 20rem 0 15rem 0;
	& > div {
		color: ${({ theme }) => theme.COLOR.common.gray[200]};
	}
`
const StyleButton = styled(Button)`
	width: 20rem;
	margin-top: 2rem;
`

const S = { Wrapper, StyleButton }
