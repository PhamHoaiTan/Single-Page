// src/Pages/Home/Home.js
import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import GameItems from '../../components/GameItems/GameItems';

function Home() {
  return (
    <div className="css-home">
    <div className="Home">
      <Header />
      <GameItems/>
    </div>
    </div>
  );
}

export default Home;