// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

function Footer() {
  return (
    <footer className="Footer">
      <p>FGZ COMPANY, 2024, ALL RIGHT RESERVED</p>
      <hr></hr>
      <nav>
        <a href="#"><img src={assets.facebook} alt="" /></a>
        <a href="#">Instagram</a>
        <a href="#">TikTok</a>
        <a href="#">YouTube</a>
        <a href="#">Telegram</a>
        <a href="#">LinkedIn</a>
      </nav>
    </footer>
  );
}

export default Footer;
