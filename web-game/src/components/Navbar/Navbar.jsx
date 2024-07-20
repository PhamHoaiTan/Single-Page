// src/components/Navbar/Navbar.jsx
import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
function Navbar({setShowLogin,setShowMore,showMore}) {

  useEffect(()=>{
    const logo = document.getElementById('logo');
    const catelogue = document.getElementById('catelogue-id');
    const navBar = document.getElementById('navBar');
    if(showMore){
      logo.style.display = 'none'
      catelogue.style.display = 'none'
      navBar.style.backgroundColor = 'black'
    }
    else{
      logo.style.display = 'block'
      navBar.style.backgroundColor = '#18181C'
      catelogue.style.display = 'block'
    }
  })
  return (
    <div className='navbar' id='navBar'>
    <div className="nav-left">
    <Link to={'/'}><img src={assets.logo} alt="" className='logo' id='logo'/></Link>
       <p className='line'>|</p>
      <Link to="/"><h2>STORE</h2></Link>
      <Link to='/catalogue' id='catelogue-id'><p>Catalogues</p></Link>
      {/* <img src={assets.search_icon} alt="" className='search-button' /> */}
    </div>
    <div className='nav-right'>
           {!showMore ? <img src={assets.more} alt=""  className='more' onClick={()=>setShowMore(true)}/>
  :<img src={assets.cross_icon} alt=""  onClick={()=>setShowMore(false)} className='un-more'/>}
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
