import React from 'react'
import classes from './Logo.module.scss'
import { Link } from 'react-router-dom'

function Logo({ theme }) {
  const cls = [classes.logo]
  theme ? cls.push(classes[theme]) : cls.push(classes.default)

  return (
    <Link to='/' className={cls.join(' ')}>
      Юбилейный
    </Link>
  )
}

export default Logo
