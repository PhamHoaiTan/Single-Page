// src/components/Navbar/Navbar.jsx
import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
function Navbar({setShowLogin,setShowMore}) {
  return (
    <div className='navbar'>
    <div className="nav-left">
    <Link to={'/'}><img src={assets.logo} alt="" className='logo'/></Link>
    <p className='line'>|</p>
      <Link to="/"><h2>STORE</h2></Link>
      <Link to='/catalogue'><p>Catalogues</p></Link>
      {/* <img src={assets.search_icon} alt="" className='search-button' /> */}
    </div>
    <div className='nav-right'>
      <img src={assets.more} alt=""  className='more' onClick={()=>setShowMore(true)}/>
      <div className="cart-dot" id='cart-dot'>
      <Link  to="/cart"><img src={assets.cart} alt="" className='cart'/></Link>
      <img src={assets.dot} alt="" className='dot-img' id='dot-img'  />
      </div>
      <img src={assets.account} alt="" className='account-img' onClick={()=>setShowLogin(true)} id='account'/>
      <button className='bt-download' id='bt-download'>Download</button>
    </div>
    </div>
  );
}

export default Navbar;
