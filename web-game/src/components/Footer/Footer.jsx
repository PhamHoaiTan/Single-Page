// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

function Footer() {
  return (
    <sfooter>

    <div className="Footer">
      <h3>Connect With Us:</h3>
      <nav className='item-social'>
        <a href="#"><img src={assets.facebook} alt=""  /></a>
        <a href="#"><img src={assets.ins} alt="" /></a>
        <a href="#"><img src={assets.tiktok} alt="" /></a>
        <a href="#"><img src={assets.youtube} alt="" /></a>
        <a href="#"><img src={assets.telegram} alt="" /></a>
      </nav>
      <hr />
    <div className="footer-review">
      <div className="about-us">
        <h4>About Us:</h4>
        <p>Our website specializes in offering the latest and most exciting games for passionate gamers. With a wide variety of genres and platforms, we are committed to providing the best gaming experience for everyone.</p>
      </div>
      <div className="contact-us">
        <h4>Contact Us:</h4>
        <p>Email: support@gamestore.com <br />
          Phone: 123-456-789 <br />
          Address: 123 ABC Street, XYZ District, Ho Chi Minh City</p>
      </div>
      <div className="customer-sp">
        <h4>Customer Support</h4>
        <p>
          Frequently Asked Questions (FAQ) <br />
          Return Policy <br />
          Privacy Policy  <br />
          Terms of Service  <br />
        </p>
      </div>
    </div>
    <hr />
    <div className="last-comment"><p>Copyright 2024 @Fptgamingzone.com - All Right Reserved</p></div>
    </div>
    </sfooter>
  );
}

export default Footer;
