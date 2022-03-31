import React from 'react'
import classes from './Header.module.scss'
import { FiPhone } from 'react-icons/fi'
import Navbar from '../Navbar/Navbar'
import Logo from '../Logo/Logo'

function Header() {
  return (
    <header className={classes.header}>
      <Logo />
      <Navbar />

      <a href='tel:+78452493306'>
        <span>
          <FiPhone />
        </span>
        49-33-06
      </a>
    </header>
  )
}

export default Header
