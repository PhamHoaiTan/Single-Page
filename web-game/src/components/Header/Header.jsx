// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';
function Header() {
  return (
    <div className="header">
    <div className="header-text">
    <h2>Welcome to FGZ</h2>
    <p>Browse our popular games here</p>
    <div className="button">
    <button>Browse Now</button>
    </div>
    </div>
  </div>)
}

export default Header;
