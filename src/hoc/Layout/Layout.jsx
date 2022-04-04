import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BackDrop from '../../components/UI/BackDrop/BackDrop'
import Drawer from '../../components/UI/Drawer/Drawer'

function Layout() {
  let [isPortable, setIsPortable] = useState(window.outerWidth < 790)
  let [isMobile, setIsMobile] = useState(window.outerWidth < 500)
  let [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const screenSizeViewer = () => {
    if (window.outerWidth < 790) {
      setIsPortable(true)
      window.outerWidth < 500 ? setIsMobile(true) : setIsMobile(false)
    } else {
      setIsPortable(false)
      setIsNavbarOpen(false)
    }
  }

  const navbarToggle = () => setIsNavbarOpen(!isNavbarOpen)
  const navbarClose = () => setIsNavbarOpen(false)

  useEffect(() => {
    window.addEventListener('resize', screenSizeViewer)

    return () => {
      window.removeEventListener('resize', screenSizeViewer)
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
      <Footer />

      <Drawer isNavbarOpen={isNavbarOpen} navbarClose={navbarClose} />
      {!isMobile && <BackDrop show={isNavbarOpen} close={navbarClose} />}
    </>
  )
}

export default Layout
