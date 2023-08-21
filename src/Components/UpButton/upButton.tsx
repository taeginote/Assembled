import { styled } from 'styled-components'
import { Up_Icon } from '../../Icons/Icons'
import { FlexCenterCSS } from '../../Styles/common'
import scrollToTop from '../../Utils/scrollToTop'
import { useEffect, useState } from 'react'

function UpButton() {
	const [scroll, setScroll] = useState<boolean>(false)

	const handleScroll = () => {
		if (window.scrollY >= 50) {
			setScroll(true)
		} else {
			setScroll(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll) //clean up
		}
	}, [])

	return (
		<>
			{scroll && (
				<S.Wrapper onClick={() => scrollToTop(0)}>
					<Up_Icon />
				</S.Wrapper>
			)}
		</>
	)
}
export default UpButton

const Wrapper = styled.div`
	width: 7rem;
	border-radius: 50%;
	height: 7rem;
	position: fixed;
	bottom: 15rem;
	right: 10rem;
	${FlexCenterCSS}
	border: 3px solid ${({ theme }) => theme.COLOR.orange};
	cursor: pointer;
	&:hover {
		transform: scale(1.05);
		transition: transform 0.2s;
	}
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
		display: none;
	}
`

const S = { Wrapper }
