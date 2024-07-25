import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Catalogue.css";
import { games } from "../../assets/games/game";

function Catalogue() {
  const genres = [...new Set(games.map((game) => game.genre))];
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="Catalogue">
      {genres.map((genre, index) => (
        <section key={index} className="genre-section">
          <h2>{genre}</h2>
          <div className="catalogue-games">
            {games
              .filter((game) => game.genre === genre)
              .map((filteredGame) => (
                <Link to={`/product/${filteredGame.id}`} key={filteredGame.id} className="game-link">
                  <div className="game">
                    <img src={filteredGame.image} alt={filteredGame.name} />
                    <p className="base-game">Base game</p>
                    <h3 className="game-title">{filteredGame.name}</h3>
                    <p className="game-price">${filteredGame.price}</p>
                  </div>
                </Link>
              ))}
          </div>
          <hr className="section-divider" />
        </section>
      ))}
    </div>
  );
}

export default Catalogue;
