import React from 'react'
import classes from './Link.module.scss'

import { Link } from 'react-router-dom'

function Link({ to, text }) {
  return (
    <Link to={to} className={classes.link}>
      {text}
    </Link>
  )
}

export default Link
