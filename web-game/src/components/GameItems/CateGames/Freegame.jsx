import React from 'react'
import freegame from '../../../assets/games/freegame'
import './Freegame.css'
const Freegame = () => {
  return (
    <div className="flash-sales">
    <div className="free-games">
    <h2 className='title'>Free Game</h2>
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