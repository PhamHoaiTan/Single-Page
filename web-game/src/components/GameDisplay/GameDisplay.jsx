import React, { useContext } from 'react'
import './GameDisplay.css'
import { StoreContext } from '../../StoreContext/StoreContext'
import GameTrending from '../GameTrending/GameTrending'
const GameDisplay = () => {
    const {games} = useContext(StoreContext)
  return (
    <div className='game-display' id='game-display'>
        <div className="game-display-trending">
          {games.map((item,index)=>{
              return <GameTrending key={index} id={item.id} name={item.name} image={item.image} description={item.description} releaseDate={item.releaseDate} developer={item.developer} publisher={item.publisher}/>
          })}
        </div>
    </div>
  )
}

export default GameDisplay