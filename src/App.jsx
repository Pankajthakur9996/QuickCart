import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
import { Productlist } from './pages/Productlist'
import { Navbar1 } from './components/Navbar1'
import { Cart } from './pages/Cart'
import {Productdetail} from './pages/Productdetail'


function App() {
  

  return (
    <>
    <Navbar1/>
    <Routes>
      <Route path='/'element={<Productlist/>}/>
      <Route path='/' element={<Productlist/>}/>
      <Route path='/product-details/:id' element={<Productdetail/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
    </Routes>

      
    </>
  )
}

export default App
