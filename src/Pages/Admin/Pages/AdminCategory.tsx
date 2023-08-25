import { styled } from 'styled-components'
import useGetCategoryData from '../../../Hooks/Queries/get-category'
import { Category } from '../../List/Components/CategoryNav/CategoryNav'

function AdminCategory() {
	const { data, isLoading, refetch } = useGetCategoryData()
	console.log(data)

	return (
		<S.Wrapper>
			<S.CategoryList>
				<h4>Assemble 카테고리 조회</h4>
				{!isLoading &&
					data?.response.map((category: Category, idx: number) => (
						<li key={idx}>
							{idx + 1}. {category.categoryName}
						</li>
					))}
			</S.CategoryList>
		</S.Wrapper>
	)
}
export default AdminCategory

const Wrapper = styled.div``
const CategoryList = styled.ul`
	background-color: aliceblue;
	font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
	border: 1px solid gray;
	& > h4 {
		padding: 1rem 1rem 0 1rem;
	}
	& > li {
		padding: 1rem;
		border-bottom: 1px solid gray;
	}
	& > li:last-child {
		border-bottom: none;
	}
`
const S = { Wrapper, CategoryList }
