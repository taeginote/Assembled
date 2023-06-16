import styled from 'styled-components'
import {
	ColumnNumberCSS,
	GridCenterCSS,
	WidthAutoCSS,
} from '../../Styles/common'
import ItemBox from '../../Components/ItemBox/ItemBox'
import Banner from '../../Components/Banner'

function List() {
	let a = []
	for (let b = 0; b < 20; b++) {
		a.push('dd')
	}

	return (
		<>
			<S.Wrapper>
				<Banner />

				<S.Container>
					{a.map(() => (
						<ItemBox />
					))}
				</S.Container>
			</S.Wrapper>
		</>
	)
}
export default List

const Wrapper = styled.div``
const Container = styled.div`
	${WidthAutoCSS}
	${GridCenterCSS}
	${ColumnNumberCSS(4)};
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
		${ColumnNumberCSS(2)};
	}
`
const S = { Wrapper, Container }
