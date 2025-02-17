import { css, keyframes } from 'styled-components'

export const GridCenterCSS = css`
	display: grid;
	justify-items: center;
	align-items: center;
`

export const ColumnNumberCSS = (count: number) => css`
	grid-template-columns: repeat(${count}, 1fr);
	column-gap: 2rem;
	row-gap: 2rem;
`

export const FlexColumnCSS = css`
	display: flex;
	flex-direction: column;
`
export const FlexCenterCSS = css`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const FlexBetweenCSS = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const FlexAlignCSS = css`
	display: flex;
	align-items: center;
`

export const WidthAutoCSS = css`
	width: 95%;
	max-width: 119.4rem;
	margin: 0 auto;
`
export const TopPadding = css`
	padding-top: 7rem;
`

export const ShadowCSS = css`
	box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.5);
`

export const FadeInKeyFrame = keyframes`
	0% {
		opacity: 0;
		transform: translateY(20%);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`
