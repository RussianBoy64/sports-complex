import classes from './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Main from './pages/Main'
import SwimmingPool from './pages/SwimmingPool'
import Playground from './pages/Playground'
import Tariffs from './pages/Tariffs'
import Contacts from './pages/Contacts'

function App() {
  return (
    <div className={classes.wrapper}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='swimming-pool' element={<SwimmingPool />} />
          <Route path='playground' element={<Playground />} />
          <Route path='tariffs' element={<Tariffs />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='*' element={<Main />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
