import styled from 'styled-components'
import Banner1 from './Components/Banner1'
import Banner2 from './Components/Banner2'
import Banner3 from './Components/Banner3'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

SwiperCore.use([Pagination, Autoplay]) // 추가

function Banner() {
	return (
		<S.Wrapper>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[Pagination]}
				className="mySwiper"
				autoplay={{ delay: 3000 }}
			>
				<SwiperSlide>
					<Banner1 />
				</SwiperSlide>
				<SwiperSlide>
					<Banner2 />
				</SwiperSlide>
				<SwiperSlide>
					<Banner3 />
				</SwiperSlide>
			</Swiper>
		</S.Wrapper>
	)
}
export default Banner

const Wrapper = styled.div`
	margin-bottom: 2rem;
`
const S = { Wrapper }
