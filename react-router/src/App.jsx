
import React from "react";
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Products from './Components/Products';

import {Routes, Route} from "react-router-dom"
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/products/:productId" element={<ProductDetails/>}></Route>
    </Routes>
      
      
    </div>
  );
}

export default App;
