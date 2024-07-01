import React from 'react'
 import './Navbar.css'
 import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-left">
    <img src={assets.logo} alt="" />
    <h1>FPT GAMING ZONE</h1>
      </div>
    <nav>
      <a href="/">Home</a>
      <a href="/catalogue">Catalogue</a>
    </nav>
  </div>
  )
}

export default Navbar