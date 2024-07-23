import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../StoreContext/StoreContext";

const GameItem = ({
  id,
  name,
  genre,
  image,
  price,
  description,
  releaseDate,
  developer,
  publisher,
}) => {
 const {cartItems, setCartItems, addToCard, removeFormCart}= useContext(StoreContext);
  return (
    <div className="game-trending">
      <div className="games">
        {
                <div key={id} className="game">
                <div className="game-img">
                <div className="add-icon">
                {!cartItems[id]?<img src={assets.plus} onClick={()=>addToCard(id)} alt=""/>
                  :<img src={assets.tick} alt='' onClick={()=>removeFormCart(id)}/>
                }</div>
                  <Link to={`/product/${id}`}>
                <img src={image} alt={name} />
                </Link> 
                </div>
                <p>Base game</p>
                <h4>{name}</h4>
                <p>{price}$</p>
                <p>{genre}</p>
                </div>
        }
      </div>
    </div>
  );
};

export default GameItem;
