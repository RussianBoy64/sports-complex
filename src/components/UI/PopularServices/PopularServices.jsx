import React from 'react'

import { Mousewheel, Pagination, EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'
import 'swiper/scss/effect-fade'
import 'swiper/scss/autoplay'

import './PopularServices.scss'

import pic1 from '../../../img/swimming.jpg'
import pic2 from '../../../img/swimming-kids.jpg'
import pic3 from '../../../img/playground.jpg'

function PopularServices() {
  return (
    <section>
      <div className='container swiper__container'>
        <Swiper
          modules={[Mousewheel, Pagination, EffectFade, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          effect='fade'
          pagination={{
            clickable: true,
          }}
          // autoplay={{ delay: 5000 }}
          loop={true}
          mousewheel={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className='swiper-slide__image__container'>
              <img className='swiper-slide__image' src={pic1} alt='image1' />
            </div>
            <h3 className='swiper-slide__title'>
              Абонемент в бассейн (взрослый)
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide__image__container'>
              <img className='swiper-slide__image' src={pic2} alt='image2' />
            </div>
            <h3 className='swiper-slide__title'>
              Абонемент в бассейн (десткий)
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide__image__container'>
              <img className='swiper-slide__image' src={pic3} alt='image3' />
            </div>
            <h3 className='swiper-slide__title'>Аренда игрового зала</h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default PopularServices
