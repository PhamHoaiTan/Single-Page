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
      <div className="name">
      <h1>{product.name}</h1>
      </div> 
      <div className="details-content">

      <img src={product.image} alt={product.name} />
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Genre:</strong> {product.genre}</p>
      <p><strong>Release Date:</strong> {product.releaseDate}</p>
      <p><strong>Developer:</strong> {product.developer}</p>
      <p><strong>Publisher:</strong> {product.publisher}</p>
      <p><strong>Description:</strong> {product.description}</p>
      </div>
      <Suggestions genre={product.genre} currentGameId={product.id} />
    </div>
  );
}

export default ProductDetail;
