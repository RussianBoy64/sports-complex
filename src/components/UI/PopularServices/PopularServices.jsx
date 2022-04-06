import React from 'react'

import { Mousewheel, Pagination, EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'
import 'swiper/scss/effect-fade'
import 'swiper/scss/autoplay'

import './PopularServices.scss'

function PopularServices() {
  return (
    <Swiper
      modules={[Mousewheel, Pagination, EffectFade, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      effect='fade'
      fadeEffect={{ crossFade: true }}
      pagination={{
        clickable: true,
        horizontalClass: 'swiper-pagination_vertical',
      }}
      autoplay={{ delay: 5000 }}
      loop={true}
      mousewheel={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  )
}

export default PopularServices
