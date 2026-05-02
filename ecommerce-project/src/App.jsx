import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import {HomePage} from './Pages/Home/HomePage';
import { CheckoutPage } from './Pages/checkout/CheckoutPage';
import './App.css'
import {OrdersPage} from './Pages/Orders/OrdersPage' ;
import {TrackingPage} from './Pages/TrackingPage' ;


function App() {
  
  const [cart, setCart]=useState([]);

   const loadCart=async ()=>{
      const response=await axios.get('/api/cart-items?expand=product');
       setCart(response.data);
    };

  useEffect(() => {
   
    loadCart();
   

  }, []);
   
  return (
    <Routes>
   <Route index element={  <HomePage cart={cart} loadCart={loadCart}/>} />
   <Route path="checkout" element={<CheckoutPage cart={cart} />}> </Route>
    <Route path="orders" element={<OrdersPage cart={cart}/>}></Route>
    <Route path="tracking" element={<TrackingPage/>}></Route>
    </Routes>
   
    
  )
}

export default App
