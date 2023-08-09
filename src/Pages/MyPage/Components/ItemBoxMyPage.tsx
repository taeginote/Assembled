import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {
	FlexAlignCSS,
	FlexBetweenCSS,
	FlexColumnCSS,
} from '../../../Styles/common'
import {
	Person_Icon,
	Chat_Icon,
	Pen_Icon,
	Trash_Icon,
} from '../../../Icons/Icons'
import { ItemDataType } from '../../../Types/type'
import Ballon from '../../../Components/Ballon/Ballon'
import { modalViewConfirm } from '../../../Atoms/modalViewConfirm.atom'
import { useSetRecoilState } from 'recoil'
import ProfileImgReturn from '../../../Utils/ProfileImgReturn'

function ItemBoxMyPage({
	data,
	setPostId,
}: {
	data: ItemDataType
	setPostId: React.Dispatch<React.SetStateAction<number>>
}) {
	const navigate = useNavigate()
	const {
		postId,
		title,
		categoryName,
		profile,
		writerNickname,
		perssonelNumber,
		expectedPeriod,
		commentCount,
	} = data
	const profileImg = ProfileImgReturn(profile?.fileFullPath)

	const setRecoilCounter = useSetRecoilState(modalViewConfirm)

	const onDeleteClub = (e?: number) => {
		setRecoilCounter(true)
		setPostId(e!)
	}
	let period =
		expectedPeriod === '제한없음' ? expectedPeriod : expectedPeriod + '달뒤'

	return (
		<S.Wrapper>
			<S.TopWrap>
				<S.Status>모집중</S.Status>
				<p>
					<button onClick={() => navigate(`/register/${postId}`)}>
						<div>
							<Ballon text={'모임 수정'} />
						</div>
						<Pen_Icon />
					</button>
					<button onClick={() => onDeleteClub(postId)}>
						<div>
							<Ballon text={'모임 삭제'} />
						</div>
						<Trash_Icon />
					</button>
				</p>
			</S.TopWrap>

			<S.Container onClick={() => navigate(`/Detail?postId=${postId}`)}>
				<S.Period>마감일 | {period}</S.Period>
				<S.Title>
					{title && title?.length > 45 ? title?.substr(0, 45) + '...' : title}
				</S.Title>
				<S.Category>{categoryName}</S.Category>
			</S.Container>
			<S.UserBox>
				<div>
					<S.UserImg src={profileImg} />
					<div>{writerNickname}</div>
				</div>
				<span>
					<Person_Icon />
					<span>{perssonelNumber}인</span>
					<Chat_Icon size={'20'} />
					<div>{commentCount}개</div>
				</span>
			</S.UserBox>
		</S.Wrapper>
	)
}
export default ItemBoxMyPage

const Wrapper = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	border: 2px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	padding: 3rem;
	border-radius: 2rem;
	cursor: pointer;
	width: 100%;
	min-width: 25rem;
	&:hover {
		transform: scale(1.01);
		transition: transform 0.2s;
	}
`
const Container = styled.div`
	${FlexColumnCSS}
	align-items: start;
	& > div {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		margin-top: 1rem;
	}
	border-bottom: 2px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	padding-bottom: 2rem;
`
const UserBox = styled.div`
	${FlexBetweenCSS}
	padding: 2rem 0 0 0;
	& > div {
		${FlexAlignCSS}
	}
	& > span {
		@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			display: none;
		}
		${FlexAlignCSS}
		span {
			margin-right: 1rem;
		}
		* {
			margin-right: 0.5rem;
			opacity: 0.7;
		}
	}
`
const MainImgContainer = styled.div`
	${FlexAlignCSS}
	height: 30rem;
	& > div {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	}
`
const Status = styled.span`
	background-color: ${({ theme }) => theme.COLOR.orange};
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	color: ${({ theme }) => theme.COLOR.hover};
	padding: 0.1rem 0.7rem;
	text-align: center;
	border-radius: 1rem;
`
const Category = styled.span`
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	color: #fb9b00;
	background-color: #fff3e0;
	padding: 0.1rem 0.7rem;
	text-align: center;
	border-radius: 1rem;
	margin-top: 2rem;
`
const Period = styled.div`
	color: ${({ theme }) => theme.COLOR.common.gray[300]};
	margin-top: 2rem;
`
const Title = styled.div`
	min-height: 8rem;
	max-height: 8rem;
`
const UserImg = styled.img`
	border-radius: 50%;
	width: 3.2rem;
	height: 3.2rem;
	margin-right: 0.5rem;
`
const TopWrap = styled.div`
	width: 100%;
	${FlexBetweenCSS}
	&>p {
		width: 25%;
		${FlexBetweenCSS}
		&>button {
			background-color: white;
			position: relative;
			& > div {
				display: none;
			}
			@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
				margin-right: 1.3rem;
			}
		}
		& > button:hover {
			scale: 1.1;
			& > div {
				display: block;
			}
		}
	}
`

const S = {
	Wrapper,
	Status,
	MainImgContainer,
	Period,
	Category,
	Container,
	UserBox,
	UserImg,
	Title,
	TopWrap,
}
