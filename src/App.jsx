import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Cart from './pages/cart/Cart'
import Shop from './pages/shop/Shop'
import {ShopContextProvider} from './context/shop-context'


function App() {

  return (
    <>
    <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route  path='/' element= {<Shop/>}/>
            <Route  path='/cart' element= {<Cart />}/>
            <Route  path='/shop' element={<Shop />}/>

          </Routes>
        </Router>
        </ShopContextProvider>
    </>
  )
}

export default App
