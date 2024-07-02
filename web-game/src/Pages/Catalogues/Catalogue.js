// src/Pages/Catalogues/Catalogue.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Catalogue.css';
import { games } from '../../assets/games/game';

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
                  <Link to={`/product/${filteredGame.id}`}>View Details</Link> {/* Thêm liên kết */}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Catalogue;
