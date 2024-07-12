// src/Pages/Home/Home.js
import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import GameItems from '../../components/GameItems/GameItems';
import GameDisplay from '../../components/GameDisplay/GameDisplay';

function Home() {
  return (
    <div className="Home">
      <Header />
      <GameItems/>
      <GameDisplay/>
    </div>
  );
}

export default Home;