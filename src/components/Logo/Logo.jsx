import React from 'react'
import classes from './Logo.module.scss'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to='/' className={classes.logo}>
      Юбилейный
    </Link>
  )
}

export default Logo
