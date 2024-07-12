import React, { useEffect, useRef, useState } from 'react'
import { games } from '../../../assets/games/game';
import GameItem from '../../GameItem/GameItem';

const Trending = () => {
    const myDivRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    useEffect(() => {
      const items = document.querySelectorAll('.game');
      if (items.length > 0 ) {
        setItemWidth(items[0].offsetWidth + 30); 
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
      myDivRef.current.style.transform = `translateX(-${currentIndex * 6 * itemWidth}px)`;
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
      {games.map((item,index) => {return(
            <GameItem 
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            genre={item.genre}
            price={item.price}  
            />
      )})}
      </div>
      </div>
  </section>
  )
}

export default Trending