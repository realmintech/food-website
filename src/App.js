import React, {useState} from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './component/footer/Footer'
import Login from './pages/loginPage/Login'
import Product from './pages/product/Product'
import Products from './pages/products/Products'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
  <>
  {showLogin?<Login setShowLogin={setShowLogin}/>:<></> }
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path='/placeOrder' element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </div>
  </>
  )
}

export default App