import React, { useContext, useEffect } from "react";
import "./AddToCart.css";
import { StoreContext } from "../../StoreContext/StoreContext";
const AddToCard = () => {
  const { cartItems, games, setCartItems, removeFormCart,getTotalCartAmount} =
    useContext(StoreContext);
  console.log(cartItems);
  return (
    <div className="cart-container">
      <div className="AddToCard">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Tilte</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {games.map((item, index) => {
            if (cartItems[item.id] || cartItems > 0) {
              return (
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>1</p>
                  <p>{item.price}$</p>
                  <p
                    className="remove-button"
                    onClick={() => removeFormCart(item.id)}
                  >
                    x
                  </p>
                </div>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <div>

          <div className="cart-totals-details">
            <p>Subtotal</p>
            <p>
            {getTotalCartAmount()}$
            </p>
          </div>
          <hr />
          <div className="cart-totals-details">
            <p>Service charge</p>
            {2}$
          </div>
          <hr />
          <div className="cart-totals-details">
            <p>Total</p>
            {getTotalCartAmount()+2}$
          </div>
          <hr />
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-totals-promo">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promo-inputs">
            <input type="text"  placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
};

export default AddToCard;
