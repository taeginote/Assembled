import { styled } from 'styled-components'
import { Category } from '../../List/Components/CategoryNav/CategoryNav'
import Button from '../../../Components/Button/Button'
import { RefetchIcon } from '../../../Icons/Icons'
import { FlexAlignCSS } from '../../../Styles/common'
import CategoryApi from '../../../Apis/CategoryApi'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { PutCategoryProps } from '../../../Types/apiType'
import ConfirmModal from '../../../Components/Modal/confirmModal'
import { modalViewConfirm } from '../../../Atoms/modalViewConfirm.atom'
import { useRecoilState } from 'recoil'
import { FlexBetweenCSS } from '../../../Styles/common'
import AdminModal from '../Components/adminModal'
import useGetAdminCategoryData from '../../../Hooks/Queries/get-adminCategory'
import LoadingPage from '../../../Components/Spinner/Spinner'

function AdminCategory() {
	const { data, isLoading, refetch } = useGetAdminCategoryData()

	const [changeCategoryNum, setChangeCategoryNum] = useState<null | number>(
		null,
	)
	const [changeVal, setChangeVal] = useState<null | string>(null)
	const [adminAddModal, AdminAddModal] = useState(false)
	const [recoilCounter, setRecoilCounter] = useRecoilState(modalViewConfirm)

	const { mutate: changeMutate } = useMutation(
		(data: PutCategoryProps) => CategoryApi.PutCategory(data),
		{
			onSuccess: () => {
				refetch()
			},
			onError: () => {},
		},
	)
	const { mutate: deleteMutate } = useMutation(
		(id: number) => CategoryApi.DeleteCategory(id),
		{
			onSuccess: () => {
				refetch()
			},
			onError: () => {},
		},
	)
	const { mutate: PostMutate } = useMutation(
		(data: Omit<PutCategoryProps, 'id'>) => CategoryApi.MeetingCategory(data),
		{
			onSuccess: () => {
				refetch()
			},
			onError: () => {},
		},
	)

	const onClickChangeCateogory = () => {
		if (changeVal!.trim().length === 0) return setChangeCategoryNum(null)

		const data = {
			categoryName: changeVal!,
			id: changeCategoryNum!,
		}

		changeMutate(data)
		setChangeCategoryNum(null)
		setChangeVal(null)
	}

	const onClickDeleteCateogory = (idx: number) => {
		setChangeCategoryNum(idx)
		setRecoilCounter(true)
	}

	const onAddCategory = (e: any) => {
		setAdminAddModal(false)
		if (e.target.input.value.trim().length === 0) return
		PostMutate({
			categoryName: e.target.input.value.trim(),
		})
	}

	const onChangeCategory = (category: Category) => {
		const { categoryId, categoryName } = category
		setChangeCategoryNum(categoryId)
		setChangeVal(categoryName)
	}

	return (
		<>
			{false ? (
				<LoadingPage />
			) : (
				<S.Wrapper>
					<S.Head>
						<S.HeadLeft>
							<h4>Assemble 카테고리</h4>

							<div onClick={() => refetch()}>
								<RefetchIcon />
							</div>
						</S.HeadLeft>
						<Button
							size="normal"
							variant="default-white"
							onClick={() => setAdminAddModal(true)}
						>
							추가
						</Button>
					</S.Head>
					<S.TableTitle>
						<S.Row>
							<S.CellId>카테고리 ID</S.CellId>
							<S.Cell>카테고리 Name</S.Cell>
							<S.CellChangeOrDelete>카테고리 수정</S.CellChangeOrDelete>
							<S.CellChangeOrDelete>카테고리 삭제</S.CellChangeOrDelete>
						</S.Row>
					</S.TableTitle>

					{data?.response.map((category: Category, idx: number) => (
						<S.Table $isEven={idx % 2 === 1} key={idx}>
							<S.Row>
								<S.CellId>{category.categoryId}</S.CellId>

								{changeCategoryNum === category.categoryId &&
								changeVal !== null ? (
									<S.Cell>
										<input
											onChange={e => setChangeVal(e.target.value)}
											value={changeVal}
										/>
									</S.Cell>
								) : (
									<S.Cell>{category.categoryName}</S.Cell>
								)}
								<S.CellChangeOrDelete>
									{changeCategoryNum === category.categoryId &&
									changeVal !== null ? (
										<Button
											size="normal"
											variant="default-white"
											onClick={onClickChangeCateogory}
										>
											완료
										</Button>
									) : (
										<Button
											size="normal"
											variant="default-white"
											onClick={() => onChangeCategory(category)}
										>
											수정
										</Button>
									)}
								</S.CellChangeOrDelete>
								<S.CellChangeOrDelete>
									<Button
										size="normal"
										variant="default-white"
										onClick={() => onClickDeleteCateogory(category.categoryId)}
									>
										삭제
									</Button>
								</S.CellChangeOrDelete>
							</S.Row>
						</S.Table>
					))}
					{recoilCounter && (
						<ConfirmModal
							text={'정말로 삭제하시겠습니까?'}
							url={'/admin'}
							mutate={deleteMutate}
							meetingId={changeCategoryNum}
						/>
					)}
					{adminAddModal && (
						<AdminModal>
							<form onSubmit={onAddCategory}>
								<S.CategoryAddInput id="input" />
								<S.ButtonWrap>
									<Button>카테고리 추가</Button>
									<Button
										variant="default-white"
										onClick={() => setAdminAddModal(false)}
									>
										취소
									</Button>
								</S.ButtonWrap>
							</form>
						</AdminModal>
					)}
				</S.Wrapper>
			)}
		</>
	)
}
export default AdminCategory

const Wrapper = styled.div`
	width: 50vw;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 100vw;
	}
`
const Head = styled.div`
	${FlexBetweenCSS}
	margin-bottom: 2rem;
`
const HeadLeft = styled.div`
	${FlexAlignCSS}
	margin-top: 2rem;
	& > h4 {
		margin-right: 2rem;
	}
	& > div {
		background-color: #fafafa;
		padding: 0 2px;
		border-radius: 5px;
		cursor: pointer;
		&:hover {
			background-color: #dee2e6;
		}
	}

	margin-bottom: 2rem;
`
const Table = styled.div<{ $isEven: boolean }>`
	display: table;
	width: 100%;
	border-collapse: collapse;
	background-color: ${({ theme, $isEven }) => $isEven && '#fafafa'};
`
const TableTitle = styled.div`
	display: table;
	width: 100%;
	border-collapse: collapse;
	background-color: ${({ theme }) => theme.COLOR.admin};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
`

const Row = styled.div`
	display: table-row;
`
const Cell = styled.div`
	display: table-cell;
	border: 1px solid #dee2e6;
	padding: 7px;
	width: 50%;
`
const CellId = styled.div`
	display: table-cell;
	border: 1px solid #dee2e6;

	padding: 7px;
	width: 20%;
`
const CellChangeOrDelete = styled.div`
	display: table-cell;
	border: 1px solid #dee2e6;

	padding: 7px;
	text-align: center;
	max-width: 4rem;
`
const CategoryAddInput = styled.input`
	border: 2px solid ${({ theme }) => theme.COLOR.main};
	width: 80%;
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	padding: 1rem;
	margin: 2rem 0;
	border-radius: 1rem;
`
const ButtonWrap = styled.div`
	display: flex;
	justify-content: center;
	* {
		margin: 0 2rem;
	}
	margin: 0 6rem;
`
const S = {
	Wrapper,
	Table,
	Row,
	Cell,
	CellId,
	CellChangeOrDelete,
	TableTitle,
	Head,
	HeadLeft,
	ButtonWrap,
	CategoryAddInput,
}
