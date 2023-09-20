import { useLocation, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

function ActivitySideFilterNav() {
	const { pathname } = useLocation()

	const currentPage = pathname.split('/')[2]
	console.log(currentPage)
	const list = [
		{
			name: '채팅',
			url: '',
		},
		{
			name: '달력',
			url: 'date',
		},
		{
			name: '모임활동',
			url: '/모임활동',
		},
		{
			name: '우리의 추억',
			url: '/추억',
		},
	]

	const navigate = useNavigate()
	return (
		<>
			{list.map((el, idx: number) => (
				<S.SelectList
					key={idx}
					$status={currentPage === el.url}
					onClick={() => navigate(`/activity/${el.url}`)}
				>
					{el.name}
				</S.SelectList>
			))}
		</>
	)
}
export default ActivitySideFilterNav

const SelectList = styled.div<{ $status: boolean }>`
	color: ${({ theme }) => theme.COLOR.button};
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	padding: 1.2rem 0 1.2rem 1rem;
	&:hover {
		background-color: ${({ theme }) => theme.COLOR.main};
	}
	background-color: ${({ theme, $status }) =>
		$status ? theme.COLOR.sub : 'none'};
`
const S = { SelectList }
