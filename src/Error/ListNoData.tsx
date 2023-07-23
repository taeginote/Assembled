import { styled } from 'styled-components'
import Button from '../Components/Button/Button'
import { useQueryClient } from '@tanstack/react-query'

function ListNoData({ setSearchValue }: any) {
	const client = useQueryClient()
	const reGet = () => {
		setSearchValue('')
		client.invalidateQueries(['useGetListData', 1])
	}
	return (
		<S.Wrapper>
			<div>검색 결과가 없습니다</div>

			<S.StyleButton onClick={reGet}>전체 모임 보기</S.StyleButton>
		</S.Wrapper>
	)
}
export default ListNoData

const Wrapper = styled.div`
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.large};
	height: 100%;
	margin: 13rem 0 15rem 0;
	& > div {
		color: ${({ theme }) => theme.COLOR.common.gray[200]};
	}
`
const StyleButton = styled(Button)`
	width: 20rem;
	margin-top: 2rem;
`

const S = { Wrapper, StyleButton }
