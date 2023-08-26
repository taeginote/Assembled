import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import SwiperCore, { Autoplay, EffectFade, Pagination } from 'swiper'
import Banner4 from './Components/Banner4'
import Banner5 from './Components/Banner5'
import Banner6 from './Components/Banner6'

SwiperCore.use([Autoplay, EffectFade, Pagination])

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
				className="mySwiper"
				autoplay={{ delay: 3500 }}
			>
				<SwiperSlide>
					<Banner4 />
				</SwiperSlide>
				<SwiperSlide>
					<Banner5 />
				</SwiperSlide>
				<SwiperSlide>
					<Banner6 />
				</SwiperSlide>
			</Swiper>
		</S.Wrapper>
	)
}
export default Banner

const Wrapper = styled.div`
	margin-bottom: 2rem;
	width: 100%;
	.swiper .swiper-pagination-bullet {
		background-color: orange;
	}
`
const S = { Wrapper }
