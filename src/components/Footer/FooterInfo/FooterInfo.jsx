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
          <a
            href='https://wa.me/79270507940'
            className={classes.footerInfo__messengers__item}
          >
            <span>
              <FaWhatsapp />
            </span>
          </a>
          <a
            href='https://t.me/vld_k64'
            className={classes.footerInfo__messengers__item}
          >
            <span>
              <FaTelegramPlane />
            </span>
          </a>
          <a
            href='viber://chat?number=%2B79270507940'
            className={classes.footerInfo__messengers__item}
          >
            <span>
              <FaViber />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FooterInfo
