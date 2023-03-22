import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookAppt from './Routes/BookAppt'
import Login from './Routes/Login'
import Signup from './Routes/Signup'
import Home from './Routes/Home'
import AboutUs from './Routes/AboutUs'
import ContactUs from './Routes/ContactUs'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/appointment' element={<BookAppt />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
      </Routes>
    </div>
  )
}
