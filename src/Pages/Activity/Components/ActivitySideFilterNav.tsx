import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { styled } from 'styled-components'

function ActivitySideFilterNav() {
	const { pathname } = useLocation()

	const currentPage = pathname.split('/')[2]

	const [searchParams] = useSearchParams()
	let meetingId: number | null = Number(searchParams.get('meetingId')) || null

	const list = [
		{
			name: '모임활동',
			url: '',
		},
		{
			name: '채팅',
			url: 'chatting',
		},
		{
			name: '달력',
			url: 'date',
		},
		// {
		// 	name: '모임활동',
		// 	url: '',
		// },
		// {
		// 	name: '우리의 추억',
		// 	url: '',
		// },
	]

	const navigate = useNavigate()
	return (
		<>
			{list.map((el, idx: number) => (
				<S.SelectList
					key={idx}
					$status={currentPage === el.url}
					onClick={() => navigate(`/activity/${el.url}?meetingId=${meetingId}`)}
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
