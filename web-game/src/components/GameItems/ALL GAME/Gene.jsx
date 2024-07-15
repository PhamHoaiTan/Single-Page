import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gamesdiscount } from '../../../assets/games/gamesdiscount';
import { assets } from '../../../assets/assets';
import GameItem from '../../GameItem/GameItem';
const Gene = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    useEffect(() => {
      const items = document.querySelectorAll('.game');
      if (items.length > 0 ) {
        setItemWidth(items[0].offsetWidth + 30); 
      }
    }, []);

    const carouselInnerRef = useRef(null);
  const carouselItemWidth = 300; // Chiều rộng của mỗi item carousel (giả sử là 300px)

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
    setCurrentIndex(newIndex < gamesdiscount.length ? newIndex : currentIndex);
    carouselInnerRef.current.scrollTo({
      left: newIndex * carouselItemWidth,
      behavior: 'smooth',
    });
  };
  return (
    <div className="Gene">
    <div className="title-pre-next">
      <h2>Flash Sales</h2>
      <div className="pre-next">
        <button className='pre' onClick={handlePrevClick} >&#8249;</button>
        <button className="next" onClick={handleNextClick} >&#8250;</button>
      </div>
      </div>
    <div className="text"  ref={carouselInnerRef}>
      <div className="games">
      {gamesdiscount.map((item,index) => {return(
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
    </div>
  )
}

export default Gene