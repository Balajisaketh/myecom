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
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/addproduct" element={<Addproductlayout/>}></Route>
        
        <Route path="/updateproduct" element={<Updateprodlayout/>}></Route>
        <Route path ="/customers" element={<Customerlayout />} ></Route>
        <Route path ="/orders" element={<OrdersLayout />} ></Route>
      </Routes>
      
    </div>
  );
}

export default App;
