import React from 'react';
import './Header.css';
import headerImage from '../../assets/Carousel.png'; 

const Header = () => {
  return (
    <div className="header">
      <div className="header-img">
        <img src={headerImage} alt="Header" />
      </div>
      <div className="header-text">
        <h1>Welcome to <span className='FGZ'>FGZ</span></h1>
        <p>BROWSE OUR POPULAR GAMES HERE</p>
        <button className="brow">BROWSE NOW</button>
      </div>
    </div>
  );
};

export default Header;
