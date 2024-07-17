// src/components/Navbar/Navbar.jsx
import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

function Navbar({setShowLogin}) {
  return (
    <div className='navbar'>
    <div className="nav-left">
    <Link to={'/'}><img src={assets.logo} alt="" className='logo'/></Link>
    <p className='line'>|</p>
      <Link to="/"><h2>STORE</h2></Link>
    </div>
    <div className='nav-right'>
      <Link  to="/cart"><img src={assets.cart} alt="" className='cart'/></Link>
      <img src={assets.account} alt="" className='account-img' onClick={()=>setShowLogin(true)} />
      <button className='bt-download'>Download</button>
    </div>
    </div>
  );
}

export default Navbar;
