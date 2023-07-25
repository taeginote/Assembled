import { styled } from 'styled-components'
import { Hamburger_Icon } from '../../../../Icons/Icons'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../Contexts/auth'
import SuccessModal from '../../../Modal/successModal'
import { useRecoilState } from 'recoil'
import { modalViewSuccess } from '../../../../Atoms/modalViewSuccess.atom'

function Hamburger() {
	const [isView, setIsView] = useState<boolean>(false)
	const location = useLocation()
	const auth = useAuth()
	const navigate = useNavigate()

	const [recoilSuccessModal, setRecoilSuccessModal] =
		useRecoilState(modalViewSuccess)

	const list = [
		{
			name: '새 글 작성',
			url: '/register',
		},
		{
			name: '내가 작성한 글',
			url: '/myPage/wrote',
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
		console.log(el)
		if (el === 'logout') return setRecoilSuccessModal(true)
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
			{recoilSuccessModal && <SuccessModal text={'로그아웃 되었습니다.'} />}
		</S.Wrapper>
	)
}
export default Hamburger

const Wrapper = styled.div`
	position: relative;
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
