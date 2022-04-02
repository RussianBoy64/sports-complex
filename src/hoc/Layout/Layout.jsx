import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import BackDrop from '../../components/UI/BackDrop/BackDrop'
import Drawer from '../../components/UI/Drawer/Drawer'

function Layout() {
  let [isPortable, setIsPortable] = useState(window.outerWidth < 790)
  let [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const isPortableToggle = () => {
    if (window.outerWidth < 790) {
      setIsPortable(true)
    } else {
      setIsPortable(false)
      setIsNavbarOpen(false)
    }
  }

  const navbarToggle = () => setIsNavbarOpen(!isNavbarOpen)
  const navbarClose = () => setIsNavbarOpen(false)

  useEffect(() => {
    window.addEventListener('resize', isPortableToggle)

    return () => {
      window.removeEventListener('resize', isPortableToggle)
    }
  }, [])

  return (
    <>
      <Header
        isPortable={isPortable}
        isNavbarOpen={isNavbarOpen}
        navbarToggle={navbarToggle}
      />
      <main>
        <Outlet />
      </main>

      <Drawer isNavbarOpen={isNavbarOpen} navbarClose={navbarClose} />
      <BackDrop show={isNavbarOpen} close={navbarClose} />
    </>
  )
}

export default Layout
