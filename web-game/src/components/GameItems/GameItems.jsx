import React, { useContext, useEffect, useRef, useState } from 'react'
import { games } from '../../assets/games/game'
import { Link } from 'react-router-dom'
import './GameItems.css'
import { AppContext} from '../../ContextApp/ContextApp'
const GameItems = () => {
// const {currentIndex,addCurrentIndex} = useContext(AppContext);

// const myDivRef = useRef(null);
//  const handleNext = () =>{
//   const track = document.querySelector('.text');
//   const itemWidth = myDivRef.current.offsetWidth +20;
//    addCurrentIndex(currentIndex+1)
//   track.style.transform = `translateX(-${currentIndex * 4 * itemWidth}px)`
//   console.log(itemWidth,currentIndex)
//  }
//  const handlePre = () =>{
//   const track = document.querySelector('.text');
//   const itemWidth = myDivRef.current.offsetWidth +20;
//   addCurrentIndex(currentIndex-1)
//   track.style.transform = `translateX(-${currentIndex * 4 * itemWidth}px)`
//   console.log(itemWidth,currentIndex)
//  }
  const myDivRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const track = document.querySelector('.text');
  console.log(currentIndex,setItemWidth)
  useEffect(() => {
    // Tính toán chiều rộng của một mục carousel (bao gồm cả margin-right)
    const items = document.querySelectorAll('.game');
    if (items.length > 0) {
      setItemWidth(items[0].offsetWidth + 20); // Giả định margin-right là 20px
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
    // Cập nhật transform của track khi currentIndex thay đổi
      track.style.transform = `translateX(-${currentIndex * 4 * itemWidth}px)`;
  }, [currentIndex, itemWidth]);

  return (
    <div>
        <section className="trending">
          <div className="title-pre-next">
          <h2 className='title'>Trending Now</h2>
          <div className="pre-next">
            <button className='pre' onClick={handlePrev}>&#8249;</button>
            <button className="next" onClick={handleNext} >&#8250;</button>
          </div>
          </div>
          <div className="text">
          <div className="games">
            {games.map((game) => (
              <Link to={`/product/${game.id}`}>
              <div ref={myDivRef} key={game.id} className="game">
                <img src={game.image} alt={game.name} />
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
        <div className="Gene">
          <h2 className='title'>Gene</h2>
          <div className="games">
            {games.map((game) => (
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
        <div className="flash-sales">
          <h2 className='title'>Flash Sales</h2>
        </div>
          
    </div>
  )
}

export default GameItems