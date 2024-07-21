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
      <div className="catalogue-game-item">

      </div>
      {genres.map((genre, index) => (
        <section key={index} className="genre-section">
          <h2>{genre}</h2>
          <div className="text">
            <div className="catalogue-games">
              {games
                .filter((game) => game.genre === genre)
                .map((filteredGame) => (
                  <Link to={`/product/${filteredGame.id}`}>
                    <div key={filteredGame.id} className="game">
                      <img src={filteredGame.image} alt={filteredGame.name} />
                      <p>Base game</p>
                      <h3>{filteredGame.name}</h3>
                      <p>{filteredGame.price}</p>
                    </div>
                  </Link>
                ))}
            </div>
            <hr />
          </div>
        </section>
      ))}
    </div>
  );
}

export default Catalogue;
