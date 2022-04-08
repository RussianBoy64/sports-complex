import React from 'react'
import classes from './MainScreen.module.scss'

function MainScreen() {
  return (
    <section className={classes.mainScreen}>
      <div className='container'>
        <div className={classes.mainScreen__header}>
          <h1 className={classes.header__title}>ФОК "Юбилейный"</h1>
          <h3 className={classes.header__subtitle}>
            им. Героя России Исаева Н.В.
          </h3>
        </div>
      </div>
    </section>
  )
}

export default MainScreen
