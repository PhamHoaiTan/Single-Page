import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Catalogue from './Pages/Catalogues/Catalogue';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <div className="App">
        <Navbar/>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/catalogue" element={<Catalogue/>} />
    </Routes>
    <Footer/> 
    </div>
  );
}

export default App;
