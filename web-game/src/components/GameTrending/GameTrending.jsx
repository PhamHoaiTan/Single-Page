import React from 'react'

const GameTrending = (id,name,genre,image,description,releaseDate,developer,publisher) => {
  return (
    <div className='game-trending'>
        <img src={image} alt="" />
    </div>
  )
}

export default GameTrending