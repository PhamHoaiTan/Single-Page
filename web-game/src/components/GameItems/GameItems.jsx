import React, {useEffect, useRef, useState } from 'react'
import { games } from '../../assets/games/game'
import { Link } from 'react-router-dom'
import './GameItems.css'
import Trending from './CateGames/Trending'
import Gene from './CateGames/Gene'
const GameItems = () => {
  
  return (
    <div>
      <Trending/>
      <Gene/>
        <div className="flash-sales">
          <h2 className='title'>Flash Sales</h2>
        </div>
          
    </div>
  )
}

export default GameItems