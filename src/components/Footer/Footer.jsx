import React from 'react'
import classes from './Footer.module.scss'
import FooterInfo from './FooterInfo/FooterInfo'
import LinkList from './LinkList/LinkList'

const NAVIGATION_LINKS = {
  header: 'Карта сайта',
  isExternal: false,
  links: [
    {
      to: '/',
      name: 'Главная',
    },
    {
      to: '/swimming-pool',
      name: 'Бассейн',
    },
    { to: '/playground', name: 'Зал' },
    { to: '/tariffs', name: 'Тарифы' },
    { to: '/contacts', name: 'Контакты' },
  ],
}
const HELPFULL_LINKS = {
  header: 'Полезные ссылки',
  isExternal: true,
  links: [
    {
      to: 'https://www.saratovmer.ru/',
      name: 'Администрация МО "Город Саратов"',
    },
    {
      to: 'http://сарспорт.рф',
      name: 'Комитет по ФКиС',
    },
    { to: 'http://волга14.рф', name: 'МАУ "СШОР №14 "Волга"' },
  ],
}

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`container ${classes.footer__container}`}>
        <FooterInfo />

        <LinkList
          header={NAVIGATION_LINKS.header}
          isExternal={NAVIGATION_LINKS.isExternal}
          links={NAVIGATION_LINKS.links}
        />

        <LinkList
          header={HELPFULL_LINKS.header}
          isExternal={HELPFULL_LINKS}
          links={HELPFULL_LINKS.links}
        />
        <p className={classes.copyRight}>
          &#169; Сайт создал Владимир Козлачков. Все права защищены.
        </p>
      </div>
    </footer>
  )
}

export default Footer
