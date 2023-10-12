import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Update from './components/PRODUCT_CRUD/Update';
import ListUser from './ListUser';
import Product from './components/product';
import Navbar from './components/Navbar.jsx'; // Import your Navbar component
import './App.css';
import Catalog from './components/PRODUCTS/Catalog';
import Listproduct from './components/PRODUCT_CRUD/Listproduct';
import AddVendor from './components/purchases/AddVendor';


function App() {
  return (
    

<Router>
<div className='app-container'>
  <div className="navbar-container">
    <Navbar />
  </div>
  <div className="content-container">
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/listProduct" element={<Listproduct />} />
      <Route path="/addVendor" element={<AddVendor/>} />
      <Route path="/products" element={<Catalog/>} /> 
      <Route path="/update" element={<Update/>} /> 
      <Route path="/registration" element={<Registration />} />
      <Route path="/user" element={<ListUser />} />
      <Route path="/login" element={<Login />} />
    
    </Routes>
  </div>
</div>
</Router>
  );
}

export default App;
