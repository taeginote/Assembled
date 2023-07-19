import styled from 'styled-components'
import {
	ColumnNumberCSS,
	FlexCenterCSS,
	GridCenterCSS,
} from '../../../Styles/common'
import ItemBox from '../../../Components/ItemBox/ItemBox'

function Wrote() {
	//일단 여기는 itembox를 map 돌릴 예정
	const testList = [1, 2, 3, 4, 5, 6, 6, 7]

	const data = {
		postId: 11,
		title: 'string',
		category: 'string',
		profile: {
			fileFullPath: 'string',
			originalName: 'string',
		},
		writer: 'string',
		personnelNumber: 'string',
		expectedPeriod: 'string',
	}

	return (
		<S.Wrapper>
			{testList.length === 0 ? (
				<div>
					작성한 글이 없습니다.
					<br /> 새 글 쓰기를 통해 게시글을 작성해보세요
				</div>
			) : (
				<S.Container>
					{/* {testList.map(el => (
						<ItemBox data={data} />
					))} */}
				</S.Container>
			)}
		</S.Wrapper>
	)
}
export default Wrote

const Wrapper = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	color: ${({ theme }) => theme.COLOR.sub};
	width: 80%;
	border-radius: 0.7rem;
	${FlexCenterCSS}
	&>div {
		text-align: center;
		line-height: 2.1;
	}
`
const Container = styled.div`
	width: 100%;
	${GridCenterCSS}
	${ColumnNumberCSS(3)};
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
		${ColumnNumberCSS(2)};
	}
`
const S = { Wrapper, Container }
