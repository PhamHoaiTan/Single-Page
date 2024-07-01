// src/Catalogue.js
import React from 'react';
import './Catalogue.css';
import { games } from './games';

function Catalogue() {
  const genres = [...new Set(games.map(game => game.genre))];

  return (
    <div className="Catalogue">
      <header className="Catalogue-header">
        <h1>FPT GAMING ZONE</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/catalogue">Catalogue</a>
        </nav>
      </header>
      <main>
        <h2>Game Catalogue</h2>
        {genres.map((genre, index) => (
          <section key={index} className="genre-section">
            <h3>{genre}</h3>
            <div className="games">
              {games.filter(game => game.genre === genre).map(filteredGame => (
                <div key={filteredGame.id} className="game">
                  <img src={filteredGame.image} alt={filteredGame.name} />
                  <h3>{filteredGame.name}</h3>
                  <p>{filteredGame.price}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
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

export default Catalogue;
