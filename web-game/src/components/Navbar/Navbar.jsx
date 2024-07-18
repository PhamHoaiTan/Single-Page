// src/components/Navbar/Navbar.jsx
import React, { useContext, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../StoreContext/StoreContext';
function Navbar({setShowLogin}) {
  const {cartItems} = useContext(StoreContext);  
  return (
    <div className='navbar'>
    <div className="nav-left">
    <Link to={'/'}><img src={assets.logo} alt="" className='logo'/></Link>
    <p className='line'>|</p>
      <Link to="/"><h2>STORE</h2></Link>
    </div>
    <div className='nav-right'>
      <div className="cart-dot">
      <Link  to="/cart"><img src={assets.cart} alt="" className='cart'/></Link>
      <img src={assets.dot} alt="" className='dot-img' id='dot-img'  />
      </div>
      <img src={assets.account} alt="" className='account-img' onClick={()=>setShowLogin(true)} />
      <button className='bt-download'>Download</button>
    </div>
    </div>
  );
}

export default Navbar;
