import styled from 'styled-components'
import { FlexBetweenCSS, FlexCenterCSS } from '../../Styles/common'
import { CancelbigIcon } from '../../Icons/Icons'
import useGetActivityUserData from '../../Hooks/Queries/get-activityUser'
import ProfileImgReturn from '../../Utils/ProfileImgReturn'

interface ActivityUserProps {
	meetingId: number
	setState: (state: boolean) => void
	name: string
}
function ActivityUserListEditModal({
	meetingId,
	setState,
	name,
}: ActivityUserProps) {
	const { data, isLoading } = useGetActivityUserData(meetingId)

	const onCancelModal = () => {
		setState(false)
		document.body.style.overflow = 'auto'
	}
	return (
		<S.Wrapper>
			<S.Box>
				<S.TitleHead>
					<h4>{name}에서 활동중인 멤버들</h4>
					<div>
						<CancelbigIcon onClick={onCancelModal} />
					</div>
				</S.TitleHead>

				<S.UserListWrap>
					{!isLoading &&
						data?.response.map((el, idx: number) => (
							<S.User key={idx}>
								<S.UserLeft>
									<S.UserImgBox>
										<S.KingImg
											src="/assets/img/king.png"
											alt="king"
											$isKing={idx === 0}
										/>
										<S.UserImg src={ProfileImgReturn(el?.profile?.filePath)} />
									</S.UserImgBox>
									{el.nickname}
								</S.UserLeft>
								<S.IsHost>{el.host ? '모임장' : '모임원'}</S.IsHost>
							</S.User>
						))}
				</S.UserListWrap>
			</S.Box>
		</S.Wrapper>
	)
}

export default ActivityUserListEditModal

const Wrapper = styled.div`
	position: fixed;
	top: -3rem;
	left: 0;
	height: 200vh;
	width: 100%;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.4);
	${FlexCenterCSS}
`
const TitleHead = styled.div`
	margin: 0 2rem;
	${FlexBetweenCSS}
	&>div {
		cursor: pointer;
	}
`
const Text = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.large};
	margin: 2rem 0;
`
const Box = styled.div`
	width: 45rem;
	padding: 1rem 0;
	text-align: center;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.COLOR.common.white};
	& > span {
		* {
			margin: 0 1rem;
		}
	}
	animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
	position: fixed;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 80%;
	}
	@keyframes fadeIn {
		0% {
			top: -20rem;
		}

		100% {
			top: 40%;
		}
	}
	padding-bottom: 2rem;
`
const User = styled.div`
	margin: 0 2rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	text-align: start;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;
`
const UserLeft = styled.div`
	display: flex;
	align-items: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
`
const UserImgBox = styled.div`
	position: relative;
`
const KingImg = styled.img<{ $isKing: boolean }>`
	display: ${({ theme, $isKing }) => ($isKing ? 'block' : 'none')};
	width: 5rem;
	height: 5rem;
	top: -3rem;
	right: 1rem;
	position: absolute;
	z-index: 1;
`
const UserImg = styled.img`
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	margin-right: 1.5rem;
	z-index: 5;
`
const UserListWrap = styled.div`
	padding-top: 1rem;
	max-height: 30rem;
	overflow: auto;
`
const IsHost = styled.div``
const S = {
	Wrapper,
	Text,
	Box,
	TitleHead,
	User,
	UserImg,
	UserImgBox,
	KingImg,
	UserListWrap,
	IsHost,
	UserLeft,
}
