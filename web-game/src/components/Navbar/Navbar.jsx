// src/components/Navbar/Navbar.jsx
import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

function Navbar() {
  return (
    <div className='navbar'>
    <div className="nav-left">
    <img src={assets.logo} alt="" className='logo'/>
    <p>|</p>
      <a href="/"><h2>STORE</h2></a>
      <a href="/catalogue">Catalogue</a>
      <a href="/cart">Cart</a>
    </div>
    <div className='nav-right'>
      <img src={assets.account} alt="" className='account-img' />
      <button className='bt-download'>Download</button>
    </div>
    </div>
  );
}

export default Navbar;
