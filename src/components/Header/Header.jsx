import React from 'react'
import classes from './Header.module.scss'
import { FiPhone } from 'react-icons/fi'
import Navbar from '../Navbar/Navbar'
import Logo from '../Logo/Logo'
import MenuToggle from '../UI/MenuToggle/MenuToggle'

function Header({ isPortable, isNavbarOpen, navbarToggle }) {
  return (
    <header className={classes.header}>
      <Logo />
      {!isPortable && (
        <>
          <Navbar />
          <a href='tel:+78452493306' className={classes.phoneLink}>
            <FiPhone className={classes.icon} />
            49-33-06
          </a>
        </>
      )}
      {isPortable && (
        <MenuToggle isNavbarOpen={isNavbarOpen} navbarToggle={navbarToggle} />
      )}
    </header>
  )
}

export default Header
