import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Addproduct from './componets/Addproduct';
import Addproductlayout from './Addproductlayout';
import Updateprodlayout from './componets/Updateprodlayout';
import Customerlayout from './componets/CustomerLayout';
import OrdersLayout from './componets/OrdersLayout';
import Orderdetails from './componets/orderdetails';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<OrdersLayout/>}></Route>
        <Route path="/addproduct" element={<Addproductlayout/>}></Route>
        
        <Route path="/updateproduct" element={<Updateprodlayout/>}></Route>
        <Route path ="/customers" element={<Customerlayout />} ></Route>
        <Route path ="/orders" element={<OrdersLayout />} ></Route>
        <Route path='/orderdetails' element={<Orderdetails/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
