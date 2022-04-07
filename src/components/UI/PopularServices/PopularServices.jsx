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
      <SwiperSlide>
        <div className='swiper-slide__image__container'>
          <img className='swiper-slide__image' src='#' alt='image1' />
        </div>
        <h3>Абонемент в бассейн (взрослый)</h3>
      </SwiperSlide>
      <SwiperSlide>
        <div className='swiper-slide__image__container'>
          <img className='swiper-slide__image' src='#' alt='image2' />
        </div>
        <h3>Абонемент в бассейн (десткий)</h3>
      </SwiperSlide>
      <SwiperSlide>
        <div className='swiper-slide__image__container'>
          <img className='swiper-slide__image' src='#' alt='image3' />
        </div>
        <h3>Аренда игрового зала</h3>
      </SwiperSlide>
    </Swiper>
  )
}

export default PopularServices
