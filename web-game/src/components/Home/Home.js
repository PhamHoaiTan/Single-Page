// src/Home.js
import React from 'react';
import './Home.css';
import { games } from './games';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>FPT GAMING ZONE</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/catalogue">Catalogue</a>
        </nav>
      </header>
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
      <footer>
        <p>FGZ COMPANY, 2024, ALL RIGHT RESERVED</p>
        <div className="social-media">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://tiktok.com">TikTok</a>
          <a href="https://youtube.com">YouTube</a>
          <a href="https://telegram.org">Telegram</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
