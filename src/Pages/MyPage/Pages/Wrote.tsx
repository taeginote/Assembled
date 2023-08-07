import styled from 'styled-components'
import {
	ColumnNumberCSS,
	FlexCenterCSS,
	GridCenterCSS,
} from '../../../Styles/common'
import ItemBoxMyPage from '../Components/ItemBoxMyPage'
import useGetWroteData from '../../../Hooks/Queries/get-wrote'
import UserIdService from '../../../Utils/UserIdService'
import Pagination from '../../../Components/Pagination/Pagination'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import ConfirmModal from '../../../Components/Modal/confirmModal'
import { modalViewConfirm } from '../../../Atoms/modalViewConfirm.atom'
import { useRecoilState } from 'recoil'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import PostApi from '../../../Apis/PostApi'
import { ItemDataType } from '../../../Types/type'
import CardSkeleton from '../../../Components/Skeleton/CardSkeleton'
import MyPageListNoData from '../../../Error/MypageListNoData'

function Wrote() {
	//일단 여기는 itembox를 map 돌릴 예정
	const [searchParams, setSearchParams] = useSearchParams()
	let pageNumber: number | null = Number(searchParams.get('page'))
	const [page, setPage] = useState<number>(pageNumber || 0)
	const [postId, setPostId] = useState<number>(1)
	const userId = UserIdService.getUserId()
	const [recoilCounter, setRecoilCounter] =
		useRecoilState<boolean>(modalViewConfirm)
	const { data, isLoading } = useGetWroteData(userId, page)
	const loadingArr: 0[] = Array(12).fill(0)
	const queryClient = useQueryClient()
	const { mutate } = useMutation(
		(postId: number | undefined) => PostApi.DeletePost(postId),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['useGetWroteData'])
			},
			onError: () => {},
		},
	)

	return (
		<S.Wrapper>
			{data?.response?.content?.length === 0 ? (
				<S.ListWrap>
					<MyPageListNoData comment={'작성한 모임이 없습니다.'} />
				</S.ListWrap>
			) : (
				<>
					{isLoading ? (
						<S.ListWrap>
							<p>작성한 모임</p>
							<S.Container>
								{loadingArr.map((el: 0, idx: number) => (
									<CardSkeleton key={idx} />
								))}
							</S.Container>
						</S.ListWrap>
					) : (
						<S.ListWrap>
							<p>작성한 모임</p>
							<S.Container>
								{data?.response?.content.map((el: ItemDataType) => (
									<ItemBoxMyPage data={el} setPostId={setPostId} />
								))}
							</S.Container>
							{data?.response?.content?.length !== 0 && (
								<Pagination
									totalPage={data?.response?.totalPages}
									limit={10}
									scroll={765}
									setPage={setPage}
								/>
							)}
							{recoilCounter && (
								<ConfirmModal
									text={'정말로 삭제하시겠습니까?'}
									url={'/myPage'}
									mutate={mutate}
									postId={postId}
								/>
							)}
						</S.ListWrap>
					)}
				</>
			)}
		</S.Wrapper>
	)
}
export default Wrote

const Wrapper = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	width: 80%;
	border-radius: 0.7rem;
	${FlexCenterCSS}
	&>div {
		text-align: center;
		line-height: 2.1;
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 85%;
	}
`
const ButtonWrap = styled.div`
	display: flex;
	margin-bottom: 3rem;
`
const Container = styled.div`
	width: 140%;
	${GridCenterCSS}
	${ColumnNumberCSS(3)};
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		${ColumnNumberCSS(2)};
	}
	& > div {
		width: 100%;
	}
`
const ListWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 20rem;
	width: 100%;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		margin-left: 7rem;
	}
	& > p {
		width: 140%;
		text-align: start;
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		margin-bottom: 2rem;
	}
`
const S = { Wrapper, Container, ButtonWrap, ListWrap }
