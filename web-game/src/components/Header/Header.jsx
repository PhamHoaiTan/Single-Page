// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { assets } from "../../assets/assets";
function Header() {
  return (
    <div className="header">  
      <div className="header-img">
      <img src={assets.carousel } alt="" />
        </div>
    <div className="header-text">
    <h2>Welcome to FGZ</h2>
    <p>Browse our popular games here</p>
    <div className="button">
      <Link to='/catalogue' className='brow'>Browse Now</Link>
    </div>
    </div>
  </div>)
}

export default Header;
