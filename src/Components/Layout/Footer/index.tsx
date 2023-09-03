import { styled } from 'styled-components'
import { FlexCenterCSS } from '../../../Styles/common'

function Footer() {
	const footerList = [
		{
			name: '어셈블',
			children: [
				{
					name: '어셈블이란?',
				},
				{
					name: '어셈블 관리자',
				},
			],
		},
		{
			name: '어셈블123',
			children: [
				{
					name: '어셈블이란123?',
				},
				{
					name: '어셈블 관리자123',
				},
			],
		},
	]

	return (
		<S.Wrapper>
			<S.Box>
				<S.List>
					{footerList.map(el => (
						<S.ListTitle>
							{el.name}
							{el.children.map(el => (
								<S.ListContent>{el.name}</S.ListContent>
							))}
						</S.ListTitle>
					))}
				</S.List>
			</S.Box>
		</S.Wrapper>
	)
}
export default Footer

const Wrapper = styled.div`
	${FlexCenterCSS}
	background-color: #FFE0B8;
`
const Box = styled.div`
	height: 20rem;
	width: 70%;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`
const List = styled.ul`
	display: flex;
	margin-top: 5rem;
`
const ListTitle = styled.div`
	margin-right: 4rem;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	color: ${({ theme }) => theme.COLOR.hover};
`
const ListContent = styled.div`
	margin-top: 0.3rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	color: #070707;
`

const S = { Wrapper, Box, List, ListTitle, ListContent }
