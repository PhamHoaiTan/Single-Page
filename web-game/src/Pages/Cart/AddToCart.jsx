import React, { useContext } from "react";
import "./AddToCart.css";
import { StoreContext } from "../../StoreContext/StoreContext";

const AddToCart = () => {
  const { cartItems, games, removeFormCart, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="cart-container">
      <div className="AddToCart">
        <div className="cart-items">
          <div className="cart-header">
            <p>Item</p>
            <p>Title</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {games.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>1</p>
                  <p>{item.price}$</p>
                  <p className="remove-button" onClick={() => removeFormCart(item.id)}>x</p>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="cart-summary">
          <div className="cart-totals">
            <h2>Cart Totals</h2>
            <div className="cart-totals-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}$</p>
            </div>
            <hr />
            <div className="cart-totals-details">
              <p>Service charge</p>
              <p>2$</p>
            </div>
            <hr />
            <div className="cart-totals-details">
              <p>Total</p>
              <p>{getTotalCartAmount() + 2}$</p>
            </div>
            <hr />
            <button className="checkout-button">PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promo">
            <p>If you have a promo code, enter it here</p>
            <div className="promo-inputs">
              <input type="text" placeholder="promo code" />
              <button className="promo-button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
