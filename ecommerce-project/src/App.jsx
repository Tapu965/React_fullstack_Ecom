import { Route, Routes } from 'react-router';
import {HomePage} from './Pages/HomePage';
import { CheckoutPage } from './Pages/CheckoutPage';
import './App.css'
import {OrdersPage} from './Pages/OrdersPage' ;
import {TrackingPage} from './Pages/TrackingPage' ;

function App() {
  
  return (
    <Routes>
   <Route index element={  <HomePage />} />
   <Route path="checkout" element={<CheckoutPage />}> </Route>
    <Route path="orders" element={<OrdersPage />}></Route>
    <Route path="tracking" element={<TrackingPage/>}></Route>
    </Routes>
   
    
  )
}

export default App
