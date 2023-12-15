import React, { useState } from 'react'
import { Navbar, Products, Login, Register } from './pages/components'
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
            <Route path='/products' element={<Products />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/login' element={
              currentForm === "register" ? <Register onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} />
            }></Route>
          </Routes>
      </div>
    </>
  )
}

export default App
