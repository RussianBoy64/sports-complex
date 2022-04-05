import React from 'react'
import classes from './LinkList.module.scss'
import { Link } from 'react-router-dom'

function LinkList({ header, isExternal, links }) {
  return (
    <div className={classes.linkList}>
      <h4 className={classes.linkList__header}>{header}</h4>
      <ul>
        {links.map((link, i) => {
          return (
            <li key={i} className={classes.linkList__item}>
              {isExternal ? (
                <a href={link.to} className={classes.linkList__link}>
                  {link.name}
                </a>
              ) : (
                <Link to={link.to} className={classes.linkList__link}>
                  {link.name}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LinkList
