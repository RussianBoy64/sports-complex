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
import Waves from '../Waves/Waves'

const services = [
  {
    img: pic1,
    imgAlt: 'Плавание',
    title: 'Абонемент в бассейн',
    subtitle: 'взрослый',
    description: 'Плавание в большой ванне бассейна - 45 минут',
  },
  {
    img: pic2,
    imgAlt: 'Плавание для детей',
    title: 'Абонемент в бассейн',
    subtitle: 'десткий',
    description:
      'Групповые занятия по обучению плаванию детей в малой ванне бассейна - 45 минут',
  },
  {
    img: pic3,
    imgAlt: 'Игровой зал',
    title: 'Аренда зала',
    subtitle: 'игровые виды спорта',
    description:
      'Предоставление спортивного зала для занятия игровыми видами спорта - 1 час',
  },
]

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
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {services.map((service, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='swiper-slide__image__container'>
                  <img
                    className='swiper-slide__image'
                    src={service.img}
                    alt={service.imgAlt}
                  />
                </div>
                <div className='swiper-slide__content'>
                  <h3 className='swiper-slide__title'>{service.title}</h3>
                  <h4 className='swiper-slide__subtitle'>{service.subtitle}</h4>
                  <p className='swiper-slide__description'>
                    {service.description}
                  </p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <Waves />
    </section>
  )
}

export default PopularServices
