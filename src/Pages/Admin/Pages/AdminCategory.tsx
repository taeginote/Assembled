import { styled } from 'styled-components'
import useGetCategoryData from '../../../Hooks/Queries/get-category'
import { Category } from '../../List/Components/CategoryNav/CategoryNav'
import Button from '../../../Components/Button/Button'
import { Refetch_Icon } from '../../../Icons/Icons'
import { FlexAlignCSS } from '../../../Styles/common'
import CategoryApi from '../../../Apis/CategoryApi'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { PutCategoryProps } from '../../../Types/apiType'

function AdminCategory() {
	const { data, isLoading, refetch } = useGetCategoryData()
	const [isChange, setIsChange] = useState<null | number>(null)
	const [changeVal, setChangeVal] = useState<null | string>(null)

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

	const onClickChangeCateogory = () => {
		if (changeVal === null) return setIsChange(null)
		if (changeVal!.trim().length === 0) return setIsChange(null)

		const data = {
			categoryName: changeVal!,
			id: isChange!,
		}
		changeMutate(data)
		setIsChange(null)
		setChangeVal(null)
	}

	const onClickDeleteCateogory = (idx: number) => {
		deleteMutate(idx)
	}

	return (
		<S.Wrapper>
			<S.Head>
				<h4>Assemble 카테고리</h4>
				<div onClick={() => refetch()}>
					<Refetch_Icon />
				</div>
			</S.Head>
			<S.TableTitle>
				<S.Row>
					<S.CellId>카테고리 ID</S.CellId>
					<S.Cell>카테고리 Name</S.Cell>
					<S.CellChangeOrDelete>카테고리 수정</S.CellChangeOrDelete>
					<S.CellChangeOrDelete>카테고리 삭제</S.CellChangeOrDelete>
				</S.Row>
			</S.TableTitle>
			{!isLoading &&
				data?.response.map((category: Category, idx: number) => (
					<S.Table $isEven={idx % 2 === 1} key={idx}>
						<S.Row>
							<S.CellId>{category.categoryId}</S.CellId>

							{isChange === category.categoryId ? (
								<S.Cell>
									<input
										onChange={e => setChangeVal(e.target.value)}
										value={changeVal ? changeVal : category.categoryName}
									/>
								</S.Cell>
							) : (
								<S.Cell>{category.categoryName}</S.Cell>
							)}
							<S.CellChangeOrDelete>
								{isChange !== category.categoryId ? (
									<Button
										size="normal"
										variant="default-white"
										onClick={() => setIsChange(category.categoryId)}
									>
										수정
									</Button>
								) : (
									<Button
										size="normal"
										variant="default-white"
										type="submit"
										onClick={onClickChangeCateogory}
									>
										완료
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
		</S.Wrapper>
	)
}
export default AdminCategory

const Wrapper = styled.div`
	width: 50vw;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`
const Head = styled.div`
	${FlexAlignCSS}

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

const S = {
	Wrapper,
	Table,
	Row,
	Cell,
	CellId,
	CellChangeOrDelete,
	TableTitle,
	Head,
}
