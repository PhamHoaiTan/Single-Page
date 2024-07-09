import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gamesdiscount } from '../../../assets/games/gamesdiscount';
const Gene = () => {
    const myDivRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    console.log(currentIndex,setItemWidth);
  
    useEffect(() => {
      const items = document.querySelectorAll('.game');
      if (items.length > 0) {
        setItemWidth(items[0].offsetWidth + 60); 
      }
    }, []);
    
  
    const handleNext = () => {
        setCurrentIndex(currentIndex + 1);
    };
  
    const handlePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    useEffect(() => {
      myDivRef.current.style.transform = `translateX(-${currentIndex * 4 * itemWidth}px)`;
    }, [currentIndex, itemWidth]);
  return (
    <div className="Gene">
    <div className="title-pre-next">
      <h2>Flash Sales</h2>
      <div className="pre-next">
        <button className='pre' onClick={handlePrev} >&#8249;</button>
        <button className="next" onClick={handleNext} >&#8250;</button>
      </div>
      </div>
    <div className="text"  ref={myDivRef}>
      <div className="games">
        {gamesdiscount.map((game) => (
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
    </div>
  )
}

export default Gene