// src/Pages/Home/ProductDetail.js
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { games } from '../../assets/games/game';
import Suggestions from '../../components/Suggestions/Suggestions';
import './ProductDetail.css';
import Requirements from '../../components/Details/Requirements';
import { gamesdiscount } from '../../assets/games/gamesdiscount';
import freegame from '../../assets/games/freegame';

function ProductDetail() {
  const { id } = useParams();
  const product = games.find(game => game.id === parseInt(id))||gamesdiscount.find(game => game.id === parseInt(id))||freegame.find(game => game.id === parseInt(id));

  const detailContain = useRef(null);
  const detailRight = useRef(null);
  const suggestion = useRef(null);
  
  const [widthContain,setWidthContain] = useState(0);
  const [topSuggest,setTopSuggest] = useState(0);
  const [nice,setHeightDetailRight] = useState(0);
  
  useEffect(()=>{
    setWidthContain(detailContain.current.offsetHeight);
    console.log(topSuggest);
  },[]);

  useEffect(()=>{
    setHeightDetailRight(detailRight.current.offsetHeight);
  },[]);
  
  useEffect(()=>{
    setTopSuggest(suggestion.current.offsetTop);
  },[]);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  

  // scroll
  window.addEventListener('scroll',()=>{
        const detailRightid = document.getElementById('detailRight');
        const crollY = window.scrollY;
          if(crollY < widthContain && crollY < topSuggest - nice){
            detailRightid.style.position = 'fixed';
            detailRightid.style.top = '20%';
          }else if(crollY >= topSuggest-nice){
            detailRightid.style.position = 'absolute';
            detailRightid.style.top = `${topSuggest-nice}px`;
          }
          else{
            detailRightid.style.position = 'absolute';
          }
  })

  return (
    <div className="ProductDetail">
      <div className="name"><h1 className='deltail-h1'>{product.name}</h1></div> 
      <div className="details-content" ref={detailContain}>
        {/* Detail Left */}
        <div className="detail-left">
      <img src={product.image} alt={product.name}  />
      <div className="detail-description"><p>{product.description}</p></div>
      <p><span className='genres'>Genres:</span><br /> {product.genre}</p>
        </div>
        {/* Detail Right */}
      <div className="detail-right" id='detailRight' ref={detailRight}>
      <div  className='base-game'><p>Base Game</p></div>
      <p>{product.price}</p>
      <div className="detail-bt">
      <button className='buyNow'>BUY NOW</button><br></br>
      <button className='addToCard'>ADD TO CARD</button>
      </div>
      <p><strong>Release Date:</strong> {product.releaseDate}</p>
      <p><strong>Developer:</strong> {product.developer}</p>
      <p><strong>Publisher:</strong> {product.publisher}</p>
      </div>
      </div>

      <div className="suggestion" ref={suggestion}>
          <Requirements product={product}/>
          <Suggestions genre={product.genre} currentGameId={product.id} />
      </div>
    </div>
  );
}

export default ProductDetail;
