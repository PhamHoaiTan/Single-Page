import React from 'react'
import { games } from '../../assets/games/game'
import { Link } from 'react-router-dom'
import './GameItems.css'
const GameItems = () => {
  return (
    <div>
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
        <section className="Gene">
          <h2>Gene</h2>
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
        <div className="flash-sales">
          <h2>Flash Sales</h2>
        </div>
          
    </div>
  )
}

export default GameItems