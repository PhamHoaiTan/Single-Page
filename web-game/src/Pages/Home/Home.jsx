// src/Pages/Home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { games } from '../../assets/games/game';
import Header from '../../components/Header/Header';

function Home() {
  return (
    <div className="Home">
      <Header />
        <section className="trending">
          <div className="trending-text">
          <h3>Trending Now</h3>
          <div className="pre-next">
            <button className='pre'>&#8249;</button>
            <button className="next">&#8250;</button>
          </div>
          </div>
          <div className="text">

          <div className="games">
            {games.map((game) => (
                <Link to={`/product/${game.id}`}>
              <div key={game.id} className="game">
                <img src={game.image} alt={game.name} />
                <h4>{game.name}</h4>
                <p>{game.price}</p>
                <p>{game.genre}</p>
                </div>
                </Link> 
            ))}
            </div>
            </div>
        </section>

        <section className="flash-sales">
          <h2>Flash Sales</h2>
          <div className="games">
            {games.map((game) => (
                <Link to={`/product/${game.id}`}>
              <div key={game.id} className="game">
                <img src={game.image} alt={game.name} />
                <h3>{game.name}</h3>
                <p>{game.price}</p>
                <p>{game.genre}</p>
              </div>
                </Link>
            ))}
          </div>
        </section>
    </div>
  );
}

export default Home;
