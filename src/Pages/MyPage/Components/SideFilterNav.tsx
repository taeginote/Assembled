import styled from 'styled-components'
import { FlexAlignCSS, FlexColumnCSS } from '../../../Styles/common'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Dot_Icon, SmallDownIcon } from '../../../Icons/Icons'

function SideFilterNav() {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const [twoDepth, setTwoDepth] = useState(false)

	const myPageFilterList = [
		{
			name: '내가 활동중인 모임',
			url: '',
		},
		{
			name: '모임',
			url: 'meeting',
		},
		{
			name: '내가 작성한 댓글',
			url: '/comment',
		},
		{
			name: '내 정보 수정',
			url: '/userSetting',
		},
		{
			name: '회원 탈퇴',
			url: '/withdrawal',
		},
	]
	const meetingFilterList = [
		{
			name: '내가 만든 모임',
			url: '/wrote',
		},
		{
			name: '내가 관심있는 모임',
			url: '/likes',
		},
	]

	return (
		<S.Wrapper>
			{myPageFilterList.map((el, idx) => (
				<>
					{el.url === 'meeting' ? (
						<>
							<S.Box
								key={idx}
								$state={`/myPage${el.url}` === pathname}
								onClick={() => setTwoDepth(prev => !prev)}
							>
								{el.name}
								<IconBox $openList={twoDepth}>
									<SmallDownIcon />
								</IconBox>
							</S.Box>
							<>
								{twoDepth &&
									meetingFilterList.map((el, idx: number) => (
										<S.UnderBox
											key={idx}
											$state={`/myPage${el.url}` === pathname}
											$openList={twoDepth}
											onClick={() => navigate(`/myPage${el.url}`)}
										>
											<Dot_Icon /> {el.name}
										</S.UnderBox>
									))}
							</>
						</>
					) : (
						<S.Box
							key={idx}
							$state={`/myPage${el.url}` === pathname}
							onClick={() => navigate(`/myPage${el.url}`)}
						>
							{el.name}
						</S.Box>
					)}
				</>
			))}
		</S.Wrapper>
	)
}
export default SideFilterNav

const Wrapper = styled.div`
	min-width: 15rem;
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
	${FlexAlignCSS}
	border-bottom: 3px solid
		${({ theme, $state }) => ($state ? theme.COLOR.hover : 'none')};
`
const UnderBox = styled.div<{ $state: boolean; $openList: boolean }>`
	width: 120%;
	cursor: pointer;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	padding: 0.2rem 0;
	margin-bottom: 0.5rem;
	${FlexAlignCSS}
	border-bottom: 3px solid
		${({ theme, $state }) => ($state ? theme.COLOR.hover : 'none')};
`
const IconBox = styled.div<{ $openList: boolean }>`
	margin-left: 1.5rem;
	${FlexAlignCSS}
	transform: ${({ $openList }) => $openList && 'rotate(180deg)'};
	transition: all linear 0.2s;
`

const S = { Wrapper, Box, UnderBox }
