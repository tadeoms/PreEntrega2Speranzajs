import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Navbar from './components/NavBar';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Catalog/>} />
        <Route path="/category/:id" element={<Catalog/>} />
        <Route path="/item/:id" element={<ProductDetail/>} />
      </Routes>
    </div>
  );
}

export default App;

