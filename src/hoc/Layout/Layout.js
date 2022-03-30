import React from 'react'
import classes from './Layout.module.scss'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

function Layout() {
  return (
    <>
      <header>
        <h2>Header</h2>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
