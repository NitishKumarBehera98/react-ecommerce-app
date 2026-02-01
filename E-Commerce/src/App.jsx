import React from 'react'
import Home from './pages/home/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from './componets/nav/Nav'
import Footer from './componets/Footer/Footer'
import Shop from './pages/home/shop/Shop'
import Cart from './pages/cart/Cart'
import Contact from './pages/contact/Contact'

const App = () => {
  return (
    <>
      {/* <Home/> */}
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
