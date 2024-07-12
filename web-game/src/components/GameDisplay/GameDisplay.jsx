import React, { useContext } from 'react'
import './GameDisplay.css'
import { StoreContext } from '../../StoreContext/StoreContext'
const GameDisplay = () => {
    const {games} = useContext(StoreContext)
  return (
    <div className='game-display' id='game-display'>
        nice to meet u
    </div>
  )
}

export default GameDisplay