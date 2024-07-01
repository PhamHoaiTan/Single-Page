// src/Home.js
import React from 'react';
import './Home.css';
import { games } from '../../assets/games/game';

function Home() {
  return (
    <div className="Home">
      <main>
        <section className="banner">
          <h2>Welcome to FGZ</h2>
          <p>Browse our popular games here</p>
          <button>Browse Now</button>
        </section>
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
