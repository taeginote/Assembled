import styled from 'styled-components'
import { FlexColumnCSS } from '../../../Styles/common'
import { Link, useSearchParams } from 'react-router-dom'

function SideFilterNav() {
	const [searchParams, setSearchParams] = useSearchParams()
	let myPage = searchParams.get('myPage')
	if (myPage === null) {
		myPage = 'active'
	}

	const myPageFilterList = [
		{
			name: '활동중인 모임',
			url: 'active',
		},
		{
			name: '정보 수정',
			url: 'edit',
		},
		{
			name: '내가 작성한 글',
			url: 'wrote',
		},
		{
			name: '내가 작성한 댓글',
			url: 'comment',
		},
		{
			name: '회원 탈퇴',
			url: 'withdrawal',
		},
	]
	return (
		<S.Wrapper>
			{myPageFilterList.map((el, idx) => (
				<S.Box key={idx} state={el.url === myPage}>
					<Link to={`?myPage=${el.url}`}>{el.name}</Link>
				</S.Box>
			))}
		</S.Wrapper>
	)
}
export default SideFilterNav

const Wrapper = styled.div`
	${FlexColumnCSS}
`
const Box = styled.div`
	width: 120%;
	cursor: pointer;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	padding: 2rem 0;
	border-bottom: 3px solid
		${({ theme, state }) => (state ? theme.COLOR.hover : 'none')};
	:hover {
		background-color: ${({ theme }) => theme.COLOR.sub};
		transition: all 0.5s;
	}
	& > a {
		text-decoration: none;
		color: ${({ theme, state }) =>
			state ? 'black' : theme.COLOR.common.gray[200]};
		background-color: red;
		/* padding: 1rem 5rem 1rem 1rem; */
	}
`
const S = { Wrapper, Box }
