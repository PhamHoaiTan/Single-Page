// src/App.js
import React, { useState } from "react";
import { Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Catalogue from "./Pages/Catalogues/Catalogue";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./Pages/Details/ProductDetail";
import AddToCart from "./Pages/Cart/AddToCart";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { StoreContextProvider } from "./StoreContext/StoreContext";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<AddToCart />} />
          </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
