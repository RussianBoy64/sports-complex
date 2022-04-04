import React from 'react'
import { CSSTransition } from 'react-transition-group'
import Navbar from '../../Navbar/Navbar'
import classes from './Drawer.module.scss'

function Drawer({ isNavbarOpen, navbarClose }) {
  return (
    <CSSTransition
      in={isNavbarOpen}
      timeout={300}
      classNames={{
        enterActive: classes.drawer_show,
        exitActive: classes.drawer_hide,
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className={classes.drawer}>
        <Navbar navbarClose={navbarClose} />
      </div>
    </CSSTransition>
  )
}

export default Drawer
