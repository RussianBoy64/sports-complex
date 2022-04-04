import React from 'react'
import classes from './FooterInfo.module.scss'
import { FaWhatsapp, FaTelegramPlane, FaViber } from 'react-icons/fa'
import Logo from '../../Logo/Logo'

function FooterInfo() {
  return (
    <div>
      <Logo theme='light' />
      <div className={classes.footerInfo}>
        <p className={classes.footerInfo__text}>
          Физкультурно-оздоровительный комплекс "Юбилейный"
        </p>
        <h4 className={classes.footerInfo__title}>Адрес:</h4>
        <p className={classes.footerInfo__text}>
          410015, г. Саратов, ул. Братьев Никитиных 10а
        </p>
        <h4 className={classes.footerInfo__title}>Связаться с нами:</h4>
        <p className={classes.footerInfo__text}>
          <a href='tel:+78452493306' className={classes.footerInfo__link}>
            +7 (8452) 49-33-06
          </a>
        </p>
        <div className={classes.footerInfo__messengers}>
          <span className={classes.footerInfo__messengers__item}>
            <FaWhatsapp />
          </span>
          <span className={classes.footerInfo__messengers__item}>
            <FaTelegramPlane />
          </span>
          <span className={classes.footerInfo__messengers__item}>
            <FaViber />
          </span>
        </div>
      </div>
    </div>
  )
}

export default FooterInfo
