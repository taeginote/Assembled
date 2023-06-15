import styled from 'styled-components'
import {
	FlexAlignCSS,
	FlexBetweenCSS,
	FlexColumnCSS,
} from '../../Styles/common'
import { Chat_Icon, Person_Icon } from '../Icons/Icons'
import { useNavigate } from 'react-router-dom'

function ItemBox() {
	const navigate = useNavigate()
	const item = {
		title: '디자이너 모집 (게시판 프로젝트)',
		contents:
			'게시판 프로젝트를 만드는데 디자인 부분이 너무 힘들어서 디자이너 찾고있습니다. 같이 할수있는 학생이면 좋아요',
		category: '개발/프로그래밍',
		writer: '인프런',
		personnelNumber: '4',
		expectedPeriod: '2',
		img: 'https://cdn.inflearn.com/public/users/thumbnails/234401/660102d4-1e7b-4c43-a7ba-7d0ee6d96b83',
	}
	return (
		<S.Wrapper onClick={() => navigate('/Detail/321')}>
			<S.Container>
				<S.Status>모집중</S.Status>
				<S.Period>마감일 | {item.expectedPeriod}달뒤</S.Period>
				<div>{item.title}</div>
				<S.Category>{item.category}</S.Category>
			</S.Container>
			<S.UserBox>
				<div>
					<S.UserImg src={item.img} />
					<div>{item.writer}</div>
				</div>
				<span>
					<Person_Icon size={'20'} />
					<span>{item.personnelNumber}인</span>
					<Chat_Icon size={'20'} />
					<div>4</div>
				</span>
			</S.UserBox>
		</S.Wrapper>
	)
}
export default ItemBox

const Wrapper = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	border: 2px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	padding: 3rem;
	border-radius: 2rem;
	cursor: pointer;

	&:hover {
		transform: scale(1.05);
		transition: transform 0.5s;
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
const UserImg = styled.img`
	border-radius: 50%;
	width: 3.2rem;
	height: 3.2rem;
	margin-right: 0.5rem;
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
}
