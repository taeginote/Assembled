import styled from 'styled-components'
import { ColumnNumberCSS, FlexAlignCSS, TopPadding } from '../../Styles/common'
import useGetDetailData from '../../Hooks/Queries/get-detail'
import LoadingPage from '../../Components/LoadingPage/Loading'
import CommentForm from './Components/CommentForm'
import { useSearchParams } from 'react-router-dom'

function Detail() {
	//보류
	//🔥Detail 여기 any를 사용하였음 더 좋은 방법 있는지 알아볼것
	const [searchParams, setSearchParams] = useSearchParams()
	let postId: any = searchParams.get('postId')

	const { data, isLoading, refetch } = useGetDetailData(postId)

	return (
		<S.Wrapper>
			{isLoading ? (
				<LoadingPage />
			) : (
				<S.Container>
					<h1>{data?.title}</h1>
					<S.Profile>
						{/* <S.UserImg src={data?.profile.fileFullPath} /> */}
						<div>{data?.writerNickname}</div>
						<span> | </span>
						<span>{data?.writeDate}</span>
					</S.Profile>
					<S.Info>
						<div>
							<div>활동 기간</div>
							<span>{data?.expectedPeriod}달</span>
						</div>
						<div>
							<div>카테고리</div>
							<span>{data?.categoryName}</span>
						</div>
						<div>
							<div>모집 인원</div>
							<span>{data?.personnelNumber}명</span>
						</div>
					</S.Info>
					<h3>프로젝트 설명</h3>
					<S.Dec>{data?.contents}</S.Dec>
					{data && (
						<CommentForm
							comments={data?.response?.comments}
							// userImg={data?.profile.fileFullPath}
							postId={postId}
							refetch={refetch}
						/>
					)}
				</S.Container>
			)}
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
	margin-bottom: 10rem;
	& > h1 {
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
		margin-bottom: 3rem;
	}
	& > h3 {
		padding-bottom: 2rem;
		font-size: 3rem;

		border-bottom: 3px solid ${({ theme }) => theme.COLOR.common.gray[100]};
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 90%;
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
