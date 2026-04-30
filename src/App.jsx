 import React from 'react';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Checkout from './pages/Checkout';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';
import AuthProvider from './components/context/AuthContext';
import ProductDetails from './pages/ProductDetails';
import CartProvider from './components/context/CartContext';


 function  App(){
     return (
      <AuthProvider> 
        <CartProvider>
  <div className='app'>
    <Navbar />
    <Routes>
      <Route path='/'  element={<Home />}/>
      <Route path='/auth' element={<Auth />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/products/:id' element={<ProductDetails />} />
      <Route path='/products/:id' element={<ProductDetails />} />
    </Routes>

  </div>
  </CartProvider>
  </AuthProvider>

     );
  
}  

export default App;


 