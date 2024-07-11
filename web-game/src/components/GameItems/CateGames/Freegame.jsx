import React from 'react'
import freegame from '../../../assets/games/freegame'
import './Freegame.css'
import { assets } from '../../../assets/assets'
const Freegame = () => {
  return (
    <div className="flash-sales">
    <div className="free-games">
    <div className="free-game-header">
      <div className="header-left">
      <img src={assets.gift} alt=""/>
    <h2 className='title'>Free Game</h2>
      </div>
      <button>View More</button>
    </div>
    <div className="games-items">
    {    
        freegame.slice(0,2).map(game => (
                <div className="game">
                <img src={game.image} alt="" />
                <p>{game.name}</p>
            </div>
        ))
    }
    </div>
    </div>
  </div>    
  )
}

export default Freegame