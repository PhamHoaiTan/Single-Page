// src/Pages/Home/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { games } from '../../assets/games/game';
import Suggestions from '../../components/Suggestions/Suggestions';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const product = games.find(game => game.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="ProductDetail">
      <div className="name"><h1 className='deltail-h1'>{product.name}</h1></div> 
      <div className="details-content">
        {/* Detail Left */}
        <div className="detail-left">
      <img src={product.image} alt={product.name} />
      <div className="detail-description"><p>{product.description}</p></div>
      <p><span className='genres'>Genres:</span><br /> {product.genre}</p>
        </div>
        {/* Detail Right */}
      <div className="detail-right">
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
      <div className="suggestion">
      <Suggestions genre={product.genre} currentGameId={product.id} />
      </div>
    </div>
  );
}

export default ProductDetail;
