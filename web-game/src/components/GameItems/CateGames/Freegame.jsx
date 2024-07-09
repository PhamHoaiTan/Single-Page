import React from 'react'
import freegame from '../../../assets/games/freegame'
const Freegame = () => {
  return (
    <div className="flash-sales">
    <h2 className='title'>Free Game</h2>
    <div className="free-games">
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
  )
}

export default Freegame