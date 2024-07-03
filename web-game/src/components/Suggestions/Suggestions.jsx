// src/components/Suggestions/Suggestions.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { games } from '../../assets/games/game';
import './Suggestions.css';

function Suggestions({ genre, currentGameId }) {
  const suggestedGames = games.filter(game => game.genre === genre && game.id !== currentGameId);

  return (
    <div className="Suggestions">
      <h2>Suggested Games</h2>
      <div className="suggested-games">
        {suggestedGames.map(game => (
          <div key={game.id} className="suggested-game">
            <Link to={`/product/${game.id}`}>
              <img src={game.image} alt={game.name} />
              <div className="game-info">
                <p>{game.name}</p>
                <p>{game.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
