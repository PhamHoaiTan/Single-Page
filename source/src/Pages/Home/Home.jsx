// src/Pages/Home/Home.js
import React, { useEffect } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import GameItems from '../../components/GameItems/GameItems';

function Home() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
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