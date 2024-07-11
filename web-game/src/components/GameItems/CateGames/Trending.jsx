import React, { useEffect, useRef, useState } from 'react'
import { games } from '../../../assets/games/game';
import { Link } from 'react-router-dom';
import { assets } from '../../../assets/assets';

const Trending = () => {
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
    <section className="trending">
    <div className="title-pre-next">
    <h2>Trending Now</h2>
    <div className="pre-next">
      <button className='pre' onClick={handlePrev}><p>&#8249;</p></button>
      <button className="next" onClick={handleNext} ><p>&#8250;</p></button>
    </div>
    </div>
    <div className="text"  ref={myDivRef}>
    <div className="games">
      {games.map((game) => (
        <Link to={`/product/${game.id}`}>
        <div key={game.id} className="game">
          <div className="game-img">
          <img src={game.image} alt={game.name} />
          <div className="add-icon">
            <img src={assets.plus} alt=""/>
            </div>
          </div>
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
  )
}

export default Trending