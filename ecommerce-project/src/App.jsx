import { Route, Routes } from 'react-router';
import {HomePage} from './Pages/HomePage';

import './App.css'

function App() {
  
  return (
    <Routes>
   <Route path="/" element={  <HomePage />} />
   <Route path="checkout" element={<div>chac out pageSt</div>}>

   </Route>
    </Routes>
   
    
  )
}

export default App
