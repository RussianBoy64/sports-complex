import React from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import classes from './MenuToggle.module.scss'

function MenuToggle({ isNavbarOpen, navbarToggle }) {
  return (
    <div className={classes.menu}>
      {isNavbarOpen ? (
        <FiX className={classes.menu__icon} onClick={navbarToggle} />
      ) : (
        <FiMenu className={classes.menu__icon} onClick={navbarToggle} />
      )}
    </div>
  )
}

export default MenuToggle
