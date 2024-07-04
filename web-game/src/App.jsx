// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Catalogue from './Pages/Catalogues/Catalogue';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProductDetail from './Pages/Details/ProductDetail';
import { AppProvider } from './ContextApp/ContextApp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      </AppProvider>
      <Footer />
    </div>
  );
}

export default App;
