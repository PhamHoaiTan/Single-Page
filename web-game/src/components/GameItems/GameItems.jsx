import React from 'react'
import { games } from '../../assets/games/game'
import { Link } from 'react-router-dom'
import './GameItems.css'
const GameItems = () => {
  return (
    <div>
        <section className="trending">
          <div className="title-pre-next">
          <h2 className='title'>Trending Now</h2>
          <div className="pre-next">
            <p></p>
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
                <p>Base game</p>
                <h4>{game.name}</h4>
                <p>{game.price}</p>
                <p>{game.genre}</p>
                </div>
                </Link> 
            ))}
            </div>
            </div>
        </section>
        <div className="Gene">
          <h2 className='title'>Gene</h2>
          <div className="games">
            {games.map((game) => (
                <Link to={`/product/${game.id}`}>
              <div key={game.id} className="game">
                <img src={game.image} alt={game.name} />
                <p>Base game</p>
                <h3>{game.name}</h3>
                <p>{game.price}</p>
                <p>{game.genre}</p>
              </div>
                </Link>
            ))}
          </div>
        </div>
        <div className="flash-sales">
          <h2 className='title'>Flash Sales</h2>
        </div>
          
    </div>
  )
}

export default GameItems