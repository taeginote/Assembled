import styled from 'styled-components'
import {
	FlexAlignCSS,
	FlexBetweenCSS,
	FlexColumnCSS,
} from '../../../Styles/common'
import { Person_Icon } from '../../../Icons/Icons'
import ProfileImgReturn from '../../../Utils/ProfileImgReturn'
import Button from '../../../Components/Button/Button'
import { Question_Icon } from '../../../Icons/Icons'
import { Content } from '../../../Hooks/Queries/get-list'

function ActivityItemBox({ data }: { data: Content; refetch?: () => void }) {
	const {
		meetingId,
		name,
		categoryName,
		writerProfileImages,
		writerNickname,
		activityUserCount,

		commentCount,
		likes,
		likeStatus,
	} = data

	// const profileImg = ProfileImgReturn(writerProfileImages?.filePath)

	/**
	 * 필요한 데이터
	 * meetingStatus (모집중 혹은 모집완료)
	 * categoryName (카테고리)
	 * title (모임 이름)
	 * 이미지를 담당자 이미지 즉, 방장의 이미지 와 방장 닉네임
	 * 현 활동하고 있는 인원 수
	 * 페이지네이션 ( 다양한 모임에 활동중인 사람이 있을수있습니다. 저는 한 페이지에 4개를 받을 예정입니다.)
	 *  */

	//Member Test Array
	const memberTestArray = [
		{
			name: '신형만',
			url: 'https://i.namu.wiki/i/PAC1nP5VNDcG0B85hshoIAWaJJqoPgRHwkNMvAnBG6LSZuSiTq5pwtqGk-cjERXIlOKWwTGZOFfxLfrjPxE-Bg.webp',
		},
		{
			name: '문',
			url: 'https://i.namu.wiki/i/x3gcnscPd_zCtI0mRZSjo9oqknbbwGAq19WLTDYuRNpCYPa7XBLkGNvt6BxjmCrHxYaaQe2_-kukiiuIPo9CBA.webp',
		},
	]

	const profileImg = ProfileImgReturn(writerProfileImages?.fileFullPath)

	return (
		<S.Wrapper>
			<S.TopWrap>
				<S.Status>모집중</S.Status>
				<Button
					size="big"
					onClick={() => alert('모임 활동 페이지는 준비중입니다 :)')}
				>
					모임 활동
				</Button>
			</S.TopWrap>
			<S.Container>
				<S.Period>카테고리 | {categoryName}</S.Period>
				<S.Title>
					{name && name?.length > 45 ? name?.substr(0, 45) + '...' : name}
				</S.Title>
				{/* <S.Category>{categoryName}</S.Category> */}
			</S.Container>
			<S.UserBox>
				<div>
					<S.UserImg src={profileImg} alt="UserImage" />
					<div>담당자 | {writerNickname}</div>
				</div>
				<span>
					<Person_Icon />
					<span>{activityUserCount}인</span>
					<Question_Icon />
					{/* <Chat_Icon size={'20'} />
					<div>{commentCount}개</div> */}
					<div>
						{memberTestArray.map(el => (
							<S.UserList>
								<S.UserImg src={el.url} />
								<div>{el.name}</div>
							</S.UserList>
						))}
					</div>
				</span>
			</S.UserBox>
		</S.Wrapper>
	)
}
export default ActivityItemBox

const Wrapper = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	border: 2px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	padding: 3rem;
	border-radius: 2rem;
	width: 100%;
	min-width: 25rem;
	margin-bottom: 2rem;

	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		min-width: 100%;
		font-size: ${({ theme }) => theme.FONT_SIZE.ss};
	}
`
const Container = styled.div`
	${FlexColumnCSS}
	align-items: start;
	& > div {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		margin-top: 1rem;
		@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		}
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
		position: relative;
		& > div {
			display: none;
			position: absolute;
			min-width: 10rem;
			right: -3rem;
			top: -9.5rem;
			border-radius: 0.5rem;
			background-color: ${({ theme }) => theme.COLOR.common.gray[100]};
		}
		&:hover {
			& > div {
				display: block;
			}
		}
		${FlexAlignCSS}
		&>span {
			margin: 0 0.5rem;
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
	background-color: ${({ theme }) => theme.COLOR.common.gray[100]};
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	color: ${({ theme }) => theme.COLOR.common.gray[300]};
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
`
const UserList = styled.div`
	display: flex;

	min-width: 10rem;
	align-items: center;
	padding: 0.5rem 1rem;
	${FlexAlignCSS}
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
	UserList,
}
