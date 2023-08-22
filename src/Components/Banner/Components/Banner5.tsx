import styled from 'styled-components'

function Banner5() {
	return (
		<S.Wrapper>
			<S.Img src="assets/img/Bannel2.png" alt="BannerIcon" />
			<S.MobileImg src="assets/img/Mobile_Bannel2.png" alt="Banner" />
		</S.Wrapper>
	)
}
export default Banner5

const Wrapper = styled.div`
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
		margin-top: 5rem;
	}
`
const Img = styled.img`
	width: 100%;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		display: none;
	}
`
const MobileImg = styled.img`
	display: none;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		display: block;
		width: 100%;
	}
`
const S = { Wrapper, Img, MobileImg }
