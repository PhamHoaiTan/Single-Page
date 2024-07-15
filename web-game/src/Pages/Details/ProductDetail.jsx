// src/Pages/Home/ProductDetail.js
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { games } from '../../assets/games/game';
import Suggestions from '../../components/Suggestions/Suggestions';
import './ProductDetail.css';
import Requirements from '../../components/Details/Requirements';
import { gamesdiscount } from '../../assets/games/gamesdiscount';
import freegame from '../../assets/games/freegame';
import { assets } from '../../assets/assets';

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
    
    if(window.innerWidth > 600){
        if(crollY < widthContain && crollY < topSuggest - nice ){
          detailRightid.style.position = 'fixed';
          detailRightid.style.top = '20%';
        }else if(crollY >= topSuggest-nice){
          detailRightid.style.position = 'absolute';
          detailRightid.style.top = `${topSuggest-nice-100}px`;
        }
        else{
          detailRightid.style.position = 'absolute';
        }
      }
      else{
        detailRightid.style.position = 'static';
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
      <table>
        <tr>
            <td><p className='p-left'>Release Date</p></td>
            <td><p>{product.releaseDate}</p></td>
        </tr>
        <tr>
          <td><p className='p-left'>Developer</p></td>
          <td>{product.developer}</td>
        </tr>
        <tr>
          <td><p className='p-left'>Publisher</p></td>
          <td>{product.publisher} </td>
        </tr>
        <tr style={{alignItems:'center'}}>
          <td><p className='p-left'>Platfrom</p></td>
          <td><img src={assets.window_icon} alt="" style={{width:'50px'}} /> </td>
        </tr>
      </table>
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
