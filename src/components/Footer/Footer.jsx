import React from 'react'
import Logo from '../Logo/Logo'
import classes from './Footer.module.scss'
import FooterInfo from './FooterInfo/FooterInfo'
import LinkList from './LinkList/LinkList'

const NAVIGATION_LINKS = {
  header: 'Карта сайта',
  links: [
    {
      to: 'http://localhost:3000/',
      name: 'Главная',
    },
    {
      to: 'http://localhost:3000/swimming-pool',
      name: 'Бассейн',
    },
    { to: 'http://localhost:3000/playground', name: 'Зал' },
    { to: 'http://localhost:3000/tariffs', name: 'Тарифы' },
    { to: 'http://localhost:3000/contacts', name: 'Контакты' },
  ],
}
const HELPFULL_LINKS = {
  header: 'Полезные ссылки',
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
          links={NAVIGATION_LINKS.links}
        />
        <LinkList header={HELPFULL_LINKS.header} links={HELPFULL_LINKS.links} />
        <p className={classes.copyRight}>
          &#169; Сайт создал Владимир Козлачков. Все права защищены.
        </p>
      </div>
    </footer>
  )
}

export default Footer
