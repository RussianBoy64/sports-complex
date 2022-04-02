import React from 'react'
import classes from './BackDrop.module.scss'
import { CSSTransition } from 'react-transition-group'

function BackDrop({ show, close }) {
  return (
    <CSSTransition
      in={show}
      timeout={300}
      classNames={{
        enterActive: classes.backDrop_show,
        exitActive: classes.backDrop_hide,
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className={classes.backDrop} onClick={close}></div>
    </CSSTransition>
  )
}

export default BackDrop
