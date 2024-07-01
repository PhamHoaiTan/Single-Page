// src/Home.js
import React from 'react';
import './Home.css';
import { games } from '../../assets/games/game';
import Header from '../../components/Header/Header';

function Home() {
  return (
    <div className="Home">
      <Header/>
      <main>
        <section className="trending">
          <h2>Trending Now</h2>
          <div className="games">
            {games.map((game) => (
              <div key={game.id} className="game">
                <img src={game.image} alt={game.name} />
                <h3>{game.name}</h3>
                <p>{game.price}</p>
                <p>{game.genre}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="flash-sales">
          <h2>Flash Sales</h2>
          <div className="games">
            {games.map((game) => (
              <div key={game.id} className="game">
                <img src={game.image} alt={game.name} />
                <h3>{game.name}</h3>
                <p>{game.price}</p>
                <p>{game.genre}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
}

export default Home;
