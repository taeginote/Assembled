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

import CardSkeleton from '../../../Components/Skeleton/CardSkeleton'
import MyPageListNoData from '../../../Error/MypageListNoData'
import { Content } from '../../../Hooks/Queries/get-list'

import GroupJoiStatusModal from '../../../Components/Modal/GroupJoinStatusModal'

export interface GroupJoinStatusModalProps {
	view: boolean
	Id: null | number
}

function Wrote() {
	//일단 여기는 itembox를 map 돌릴 예정
	const [searchParams] = useSearchParams()
	let pageNumber: number | null = Number(searchParams.get('page'))
	const [page, setPage] = useState<number>(pageNumber || 0)
	const [postId, setPostId] = useState<number>(1)
	const [groupJoinStatusModal, setGroupJoinStatusModal] =
		useState<GroupJoinStatusModalProps>({
			view: false,
			Id: null,
		})
	const [recoilCounter] = useRecoilState<boolean>(modalViewConfirm)

	const userId = UserIdService.getUserId()
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
							<p>내가 만든 모임</p>
							<S.Container>
								{loadingArr.map((el: 0, idx: number) => (
									<CardSkeleton key={idx} />
								))}
							</S.Container>
						</S.ListWrap>
					) : (
						<S.ListWrap>
							<p>내가 만든 모임</p>
							<S.Container>
								{data?.response?.content.map((el: Content, idx: number) => (
									<ItemBoxMyPage
										data={el}
										setPostId={setPostId}
										setState={setGroupJoinStatusModal}
										key={idx}
									/>
								))}
							</S.Container>
							{data?.response?.content?.length !== 0 && (
								<Pagination
									totalPage={data?.response?.totalPages!}
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
			{groupJoinStatusModal.view && (
				<GroupJoiStatusModal
					setState={setGroupJoinStatusModal}
					groupJoinStatusModal={groupJoinStatusModal}
				/>
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
		/* line-height: 2.1; */
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 90%;
	}
`
const ButtonWrap = styled.div`
	display: flex;
	margin-bottom: 3rem;
`
const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	& > div {
		width: 100%;
	}
`
const ListWrap = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10rem;
	width: 100%;

	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		margin-left: 2.5rem;
	}
	& > p {
		width: 145%;
		text-align: start;
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		margin-bottom: 2rem;
		@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
			width: 50%;
		}
	}
`
const S = { Wrapper, Container, ButtonWrap, ListWrap }
