import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
import { Productdetails } from './pages/Productdetail'
import { Productlist } from './pages/Productlist'
import { Navbar1 } from './components/Navbar1'


function App() {
  

  return (
    <>
    <Navbar1/>
    <Routes>
      <Route path='/'element={<Productlist/>}/>
      <Route path='/' element={<Productlist/>}/>
      <Route path='/cart' element={<Productdetails/>}/>
      
    </Routes>

      
    </>
  )
}

export default App
