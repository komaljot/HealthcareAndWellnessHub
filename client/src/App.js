import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookAppt from './Components/BookAppt'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/appointment' element={<BookAppt />}></Route>
      </Routes>
    </div>
  )
}
