// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';
import headerImage from '../../assets/Carousel.webp'; // Cập nhật đường dẫn đúng

function Header() {
  return (
    <header className="Header">
      <img src={headerImage} alt="Header" />
      <div className="header-content">
        <h1>Welcome to FGZ</h1>
        <a href="/catalogue">Browse Now</a>
      </div>
    </header>
  );
}

export default Header;
