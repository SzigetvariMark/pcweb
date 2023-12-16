import React, { useState } from 'react'
import { Navbar, Login, Register, Basket, News, Actions } from './pages/components'
import Home from './pages/Home'
import About from './pages/About'

import { Route, Routes } from 'react-router-dom'

function App() {
  const [currentForm, setCurrentForm] = useState('Login')
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <>
      <Navbar />
      <div className='container'>
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/new_products' element={<News />}></Route>
            <Route path='/actions' element={<Actions />}></Route>
            <Route path='/login' element={
              currentForm === "register" ? <Register onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} />
            }></Route>
            <Route path='/basket' element={<Basket />}></Route>
          </Routes>
      </div>
    </>
  )
}

export default App
