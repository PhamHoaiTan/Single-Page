// src/components/Navbar/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Đảm bảo đường dẫn chính xác

function Navbar() {
  return (
    <nav className="Navbar">
      <a href="/">Home</a>
      <a href="/catalogue">Catalogue</a>
      <a href="/cart">Cart</a>
    </nav>
  );
}

export default Navbar;
