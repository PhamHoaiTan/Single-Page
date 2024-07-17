import React, { useContext, useEffect } from 'react'
import './AddToCart.css'
import { StoreContext } from '../../StoreContext/StoreContext';
const AddToCard = () => {
  const {cartItems,games, setCartItems }= useContext(StoreContext);
  console.log(cartItems)
  return (
    <div className='AddToCard'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Tilte</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {
          games.map((item, index)=>{
            if(cartItems[item.id]||cartItems>0)
            {
              return (
                <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default AddToCard