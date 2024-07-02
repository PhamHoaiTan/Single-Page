// src/Pages/Home/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { games } from '../../assets/games/game';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const product = games.find(game => game.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="ProductDetail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price: {product.price}</p>
      <p>Genre: {product.genre}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default ProductDetail;
