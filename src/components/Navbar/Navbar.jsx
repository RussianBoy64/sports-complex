import React from 'react'
import classes from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

const linkList = [
  { to: '/', text: 'Главная' },
  { to: '/swimming-pool', text: 'Бассейн' },
  { to: '/playground', text: 'Зал' },
  { to: '/tariffs', text: 'Тарифы' },
  { to: '/contacts', text: 'Контакты' },
]

function Navbar({ navbarClose }) {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        {linkList.map((link, index) => {
          return (
            <li key={index}>
              <NavLink
                className={classes.nav__link}
                to={link.to}
                onClick={navbarClose ? navbarClose : null}
              >
                {link.text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
