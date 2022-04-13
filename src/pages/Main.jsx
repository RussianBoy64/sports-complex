import React from 'react'
import Infrastructure from '../components/Infrastructure/Infrastructure'
import MainScreen from '../components/MainScreen/MainScreen'
import PopularServices from '../components/UI/PopularServices/PopularServices'

function Main() {
  return (
    <>
      <MainScreen />
      <PopularServices />
      <Infrastructure />
    </>
  )
}

export default Main
