import React from 'react'
import classes from './LinkList.module.scss'

function LinkList({ header, links }) {
  return (
    <div className={classes.linkList}>
      <h4 className={classes.linkList__header}>{header}</h4>
      <ul>
        {links.map((link, i) => {
          return (
            <li key={i} className={classes.linkList__item}>
              <a href={link.to} className={classes.linkList__link}>
                {link.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LinkList
