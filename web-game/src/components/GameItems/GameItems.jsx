import React, {useEffect, useRef, useState } from 'react'
import { games } from '../../assets/games/game'
import { Link } from 'react-router-dom'
import './GameItems.css'
import Trending from './Trending'
const GameItems = () => {
  
  return (
    <div>
      <Trending/>
        <div className="Gene">
        <div className="title-pre-next">
          <h2>Trending Now</h2>
          <div className="pre-next">
            <button className='pre' >&#8249;</button>
            <button className="next" >&#8250;</button>
          </div>
          </div>
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