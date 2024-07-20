import { createContext, useEffect, useState } from "react";
import { games } from "../assets/games/game";
import freegame from "../assets/games/freegame";
export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [count,addCount] = useState(0)
  const addToCard = (itemID) => {
    if (!cartItems[itemID]) {
      setCartItems((prev) => ({ ...prev, [itemID]: 1 }));
      addCount(count+1);
    }
  };
  const removeFormCart = (itemID) => {
    addCount(count-1);
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };
  useEffect(() => {
    console.log(cartItems,count);
     const dot = document.getElementById("dot-img");
     const dotP = document.getElementById("dot-img-Phone")
          if(count===0){
            dot.style.display = 'none';
          }
          else if(count>0){
            dot.style.display = 'block';
          }
  }, [cartItems]);   
  
    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
        console.log(item);
        if (cartItems[item] > 0) {
          let itemInfo = games.find((product) => product.id === item);
          if (itemInfo) {
            totalAmount += itemInfo.price;
          } else {
            console.log(`Product with ID ${item} not found in games array`);
          }
        }
      }
      return totalAmount;
  };

  const contextValue = {
    games,
    freegame,
    cartItems,
    setCartItems,
    addToCard,
    removeFormCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
