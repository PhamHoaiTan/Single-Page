import React from 'react'
 import './Navbar.css'
 import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-left">
        <img src={assets.logo} alt="" className='logo' />
        <h1>FGZ</h1>
      </div>
    <nav className='nav-menu'>
      <a href="/">Home</a>
      <a href="/catalogue">Catalogue</a>
      <a href="/card">Card</a>
    </nav>
    <div className="nav-right">
      asdf
    </div>
  </div>
  )
}

export default Navbar