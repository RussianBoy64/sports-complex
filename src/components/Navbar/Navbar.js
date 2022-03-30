import React from 'react'
import classes from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', text: 'Главная' },
  { to: '/swimming-pool', text: 'Бассейн' },
  { to: '/playground', text: 'Зал' },
  { to: '/tariffs', text: 'Таррифы' },
  { to: '/contacts', text: 'Контакты' },
]

function Navbar() {
  return (
    <ul className={classes.nav}>
      {links.map((link, index) => {
        return (
          <li key={index}>
            <NavLink className={classes.nav__link} to={link.to}>
              {link.text}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}

export default Navbar
