// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';
import './App.css'; // Add your global styles here

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ProductListing" element={<ProductListing />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
