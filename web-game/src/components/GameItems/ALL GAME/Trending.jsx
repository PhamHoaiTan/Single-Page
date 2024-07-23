import React, { useEffect, useRef, useState } from 'react'
import { games } from '../../../assets/games/game';
import GameItem from '../../GameItem/GameItem';

const Trending = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInnerRef = useRef(null);
  const carouselItemWidth = 300;

  const handlePrevClick = () => {
    const newIndex = currentIndex - (window.innerWidth < 576 ? 3 : 4);
    setCurrentIndex(newIndex >= 0 ? newIndex : 0);
    carouselInnerRef.current.scrollTo({
      left: newIndex >= 0 ? newIndex * carouselItemWidth : 0,
      behavior: 'smooth',
    });
  };

  const handleNextClick = () => {
    const newIndex = currentIndex + (window.innerWidth < 576 ? 3 : 4);
    setCurrentIndex(newIndex < games.length ? newIndex : currentIndex);
    carouselInnerRef.current.scrollTo({
      left: newIndex * carouselItemWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className="trending">
    <div className="title-pre-next">
    <h2 className='HomeH2'>Trending Now</h2>
    <div className="pre-next">
      <button className='pre' onClick={handlePrevClick}><p>&#8249;</p></button>
      <button className="next" onClick={handleNextClick} ><p>&#8250;</p></button>
    </div>
    </div>
    <div className="text"  ref={carouselInnerRef}>
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