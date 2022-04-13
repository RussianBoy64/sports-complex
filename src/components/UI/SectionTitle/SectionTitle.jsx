import React from 'react'
import classes from './SectionTitle.module.scss'

function SectionTitle({ text }) {
  return <h3 className={classes.sectionTitle}>{text}</h3>
}

export default SectionTitle
