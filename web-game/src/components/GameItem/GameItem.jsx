import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

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
  const [itemCount,setItemCount] = useState(0);
  return (
    <div className="game-trending">
      <div className="games">
        {
                <div key={id} className="game">
                <div className="game-img">
                <div className="add-icon">
                {!itemCount?<img src={assets.plus} onClick={()=>setItemCount(prev=>prev+1)} alt=""/>
                  :<img src={assets.tick} alt='' onClick={()=>setItemCount(pre=>pre-1)}/>
                }</div>
                  <Link to={`/product/${id}`}>
                <img src={image} alt={name} />
                </Link> 
                </div>
                <p>Base game</p>
                <h4>{name}</h4>
                <p>{price}</p>
                <p>{genre}</p>
                </div>
        }
      </div>
    </div>
  );
};

export default GameItem;
