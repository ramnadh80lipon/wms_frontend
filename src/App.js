import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Homepage from './components/Homepage';
import ListUser from './ListUser';
import Product from './components/product';
import Navbar from './components/Navbar.jsx'; // Import your Navbar component
import './App.css';


function App() {
  return (
    // <Router> {/* Ensure that the entire app is wrapped within the Router */}
    //   <div className='App'>
    //     <div className="Navbar">
    //       <Navbar />
    //     </div>

    //     <div className="Homepage">
    //       <Routes>
    //         <Route path="/registration" element={<Registration />} />
    //         <Route path="/user" element={<ListUser />} />
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/" element={<Product />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>

<Router>
<div className='app-container'>
  <div className="navbar-container">
    <Navbar />
  </div>
  <div className="content-container">
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/user" element={<ListUser />} />
      <Route path="/login" element={<Login />} />
      {/* Add more routes for other components */}
    </Routes>
  </div>
</div>
</Router>
  );
}

export default App;
