import styled from 'styled-components'
import { ColumnNumberCSS, FlexAlignCSS, TopPadding } from '../../Styles/common'
import CommentForm from '../../Components/CommentForm'

function Detail() {
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
		<S.Wrapper>
			<S.Container>
				<h1>{item.title}</h1>
				<S.Profile>
					<S.UserImg src={item.img} />
					<div>{item.writer}</div>
					<span> | </span>
					<span>2023.06.15 </span>
				</S.Profile>
				<S.Info>
					<div>
						<div>활동 기간</div>
						<span>{item.expectedPeriod}달</span>
					</div>
					<div>
						<div>카테고리</div>
						<span>{item.category}</span>
					</div>
					<div>
						<div>모집 인원</div>
						<span>{item.personnelNumber}명</span>
					</div>
				</S.Info>
				<h3>프로젝트 설명</h3>
				<S.Dec>{item.contents}</S.Dec>
				<CommentForm />
			</S.Container>
		</S.Wrapper>
	)
}
export default Detail

const Wrapper = styled.div`
	${TopPadding}
	width: 100%;
`
const Container = styled.div`
	width: 50%;
	margin: 0 auto;
	margin-top: 7rem;

	& > h1 {
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
		margin-bottom: 3rem;
	}
	& > h3 {
		padding-bottom: 2rem;
		font-size: 3rem;

		border-bottom: 3px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	}
`
const Profile = styled.div`
	${FlexAlignCSS}
	* {
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	}
	color: ${({ theme }) => theme.COLOR.common.gray[200]};
	div {
		color: ${({ theme }) => theme.COLOR.common.black};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
	span {
		margin-left: 2rem;
	}
	border-bottom: 3px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	padding-bottom: 4rem;
`
const UserImg = styled.img`
	border-radius: 50%;
	width: 4rem;
	height: 4rem;
	margin-right: 2rem;
`
const Info = styled.div`
	font-size: 2rem;
	margin: 3rem 0 7rem 0;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	display: grid;
	align-items: center;
	${ColumnNumberCSS(2)}
	&>div {
		display: grid;
		align-items: center;
		${ColumnNumberCSS(10)}
		& > div {
			color: ${({ theme }) => theme.COLOR.common.gray[200]};
			grid-column-start: 1;
			grid-column-end: 4;
		}
		& > span {
			grid-column-start: 4;
			grid-column-end: 11;
			font-size: 2rem;
			font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		}
	}
`
const Dec = styled.div`
	margin: 3rem 0 10rem 0;
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
`
const S = { Wrapper, Container, Profile, UserImg, Info, Dec }
