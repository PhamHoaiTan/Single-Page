import React from "react";
import freegame from "../../../assets/games/freegame";
import "./Freegame.css";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const Freegame = () => {
  return (
    <div className="flash-sales">
      <div className="free-games">
        <div className="free-game-header">
          <div className="header-left">
            <img src={assets.gift} alt="Gift Icon" />
            <h2 className="title">Free Game</h2>
          </div>
          <button>View More</button>
        </div>
        <div className="games-items">
          {freegame.slice(0, 2).map((game) => (
            <div className="game" key={game.id}>
              <Link to={`/product/${game.id}`}>
                <div className="game-banner-free">
                  <img src={game.image} alt={game.name} />
                  <div className="banner-free">Free Now</div>
                </div>
                <p>{game.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Freegame;
