import React from 'react'
import classes from './Infrastructure.module.scss'

import SectionTitle from '../UI/SectionTitle/SectionTitle'

import pic1 from '../../img/main-page-min.jpeg'
import pic2 from '../../img/small-swimmingPool-min.jpg'
import pic3 from '../../img/playground.jpg'

const structures = [
  {
    title: 'Большой бассейн',
    img: pic1,
    description: [
      'Габариты - 25х12,8м',
      'Кол-во дорожек - 5 дорожек',
      'Ширина дорожек - 1,5м',
      'Глубина - 1,8-2,2м',
    ],
  },
  {
    title: 'Малый бассейн',
    img: pic2,
    description: [
      'Габариты - 10х8м',
      'Температура воды - 32 град',
      'Глубина - 0,6-0,8м',
    ],
  },
  {
    title: 'Игровой зал',
    img: pic3,
    description: [
      'Площадка - 40х22м',
      'Трибуна - 86 мест',
      'Цифровое табло',
      'Звуковове оборудование',
    ],
  },
]

function Infrastructure() {
  return (
    <section>
      <div className='container'>
        <SectionTitle text='Инфраструктура' />
        {structures.map((structure, index) => {
          return (
            <div
              style={{ backgroundImage: `url(${structure.img})` }}
              className={classes.card}
              key={index}
            >
              <div className={classes.card__description}>
                <h4 className={classes.description__title}>
                  {structure.title}
                </h4>
                <ul className={classes.description__list}>
                  {structure['description'].map((desc, i) => {
                    return (
                      <li key={i}>
                        <span className={classes.list__item}>{desc}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Infrastructure
