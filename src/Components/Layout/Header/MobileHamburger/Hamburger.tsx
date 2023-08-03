import { styled } from 'styled-components'
import { Hamburger_Icon } from '../../../../Icons/Icons'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../Contexts/auth'
import SuccessModal from '../../../Modal/successModal'

function Hamburger() {
	const [isView, setIsView] = useState<boolean>(false)
	const location = useLocation()
	const auth = useAuth()
	const navigate = useNavigate()

	const [successModal, setSuccessModal] = useState(false)

	const list = [
		{
			name: '새 글 작성',
			url: '/register',
		},
		{
			name: '내가 작성한 글',
			url: '/myPage',
		},
		{
			name: '내가 작성한 댓글',
			url: '/myPage/comment',
		},
		{
			name: '로그아웃',
			url: 'logout',
		},
		{
			name: '회원 탈퇴',
			url: '/myPage/withdrawal',
		},
	]

	useEffect(() => {
		setIsView(false)
	}, [location.pathname])

	const onClickList = (el: string) => {
		if (el === 'logout') return setSuccessModal(true)
		navigate(el)
	}
	return (
		<S.Wrapper>
			<Hamburger_Icon onClick={() => setIsView(!isView)} />
			{isView && (
				<S.ListBox>
					{list.map(el => (
						<S.List onClick={() => onClickList(el.url)}>{el.name}</S.List>
					))}
				</S.ListBox>
			)}
			{successModal && (
				<SuccessModal
					text={'로그아웃 되었습니다.'}
					setState={setSuccessModal}
				/>
			)}
		</S.Wrapper>
	)
}
export default Hamburger

const Wrapper = styled.div`
	position: relative;
	display: none;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		display: block;
	}
`
const ListBox = styled.ul`
	position: absolute;
	width: 14rem;
	top: 3rem;
	left: -11rem;
	background-color: ${({ theme }) => theme.COLOR.orange};
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
`
const List = styled.ul`
	padding: 1rem;
`

const S = { Wrapper, ListBox, List }
