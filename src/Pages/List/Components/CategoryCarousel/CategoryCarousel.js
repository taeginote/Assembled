import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styled from 'styled-components'
import { WidthAutoCSS } from '../../../../Styles/common'
import {
	Book_Icon,
	Club_Icon,
	Computer_Icon,
	People_Icon,
	Travel_Icon,
} from '../../../../Icons/Icons'

SwiperCore.use([Navigation, Pagination, Autoplay])

const categoryArr = [
	{
		id: 1,
		name: '#개발/프로그래밍',
		icon: <Computer_Icon />,
	},
	{
		id: 2,
		name: '#독서',
		icon: <Book_Icon />,
	},
	{
		id: 3,
		name: '#면접 스터디',
		icon: <People_Icon />,
	},
	{
		id: 4,
		name: '#동아리',
		icon: <Club_Icon />,
	},
	{
		id: 5,
		name: '#독서',
		icon: <Travel_Icon />,
	},
	{
		id: 1,
		name: '#개발/프로그래밍',
		icon: <Computer_Icon />,
	},
	{
		id: 2,
		name: '#독서',
		icon: <Book_Icon />,
	},
	{
		id: 3,
		name: '#면접 스터디',
		icon: <People_Icon />,
	},
	{
		id: 4,
		name: '#동아리',
		icon: <Club_Icon />,
	},
	{
		id: 5,
		name: '#독서',
		icon: <Travel_Icon />,
	},
]

function CategoryCarousel() {
	return (
		<S.SwiperWrapper>
			{/* <h3>어셈블에서 원하는 카테고리를 보고싶다면?</h3> */}
			<Swiper
				className="banner"
				spaceBetween={10}
				slidesPerView={5}
				navigation={true}
			>
				{categoryArr.map(el => (
					<SwiperSlide className="slider">
						<div>{el.icon}</div>
						{el.name}
					</SwiperSlide>
				))}
			</Swiper>
		</S.SwiperWrapper>
	)
}
export default CategoryCarousel

const SwiperWrapper = styled.div`
	${WidthAutoCSS}
	.swiper {
		--swiper-theme-color: ${({ theme }) => theme.COLOR.common.gray[300]};
		padding: 1rem 0;
	}
	.slider {
		font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
		:hover {
			scale: 1.07;
			transition: all 0.3s;
			color: ${({ theme }) => theme.COLOR.hover};
		}

		cursor: pointer;
	}
	.banner {
		text-align: center;
	}
	.swiper-button-prev {
		:hover {
			color: ${({ theme }) => theme.COLOR.hover};
			transition: all 0.3s;
		}
	}
	.swiper-button-next {
		:hover {
			color: ${({ theme }) => theme.COLOR.hover};
			transition: all 0.3s;
		}
	}
	/* & > h3 {
		text-align: center;
		margin-bottom: 3rem;
		margin-top: 3rem;
		font-family: ${({ theme }) => theme.FONT_WEIGHT.light};
	} */
	margin-bottom: 3rem;
`
const S = { SwiperWrapper }
