import styled from 'styled-components'
import { FlexColumnCSS } from '../../../Styles/common'
import { useLocation, useNavigate } from 'react-router-dom'

function SideFilterNav() {
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const myPageFilterList = [
		{
			name: '운영중인 모임',
			url: '',
		},
		{
			name: '내가 작성한 댓글',
			url: '/comment',
		},
		{
			name: '회원 탈퇴',
			url: '/withdrawal',
		},
	]

	return (
		<S.Wrapper>
			{myPageFilterList.map((el, idx) => (
				<S.Box
					key={idx}
					$state={`/myPage${el.url}` === pathname}
					onClick={() => navigate(`/myPage${el.url}`)}
				>
					{el.name}
				</S.Box>
			))}
		</S.Wrapper>
	)
}
export default SideFilterNav

const Wrapper = styled.div`
	${FlexColumnCSS}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		/* flex-direction: row; */
		display: none;
	}
`
const Box = styled.div<{ $state: boolean }>`
	width: 120%;
	cursor: pointer;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	padding: 0.7rem 0;
	margin-bottom: 0.5rem;
	border-bottom: 3px solid
		${({ theme, $state }) => ($state ? theme.COLOR.hover : 'none')};
	:hover {
		background-color: ${({ theme }) => theme.COLOR.sub};
		transition: all 0.5s;
	}
`
const S = { Wrapper, Box }
