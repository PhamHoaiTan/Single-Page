import { createContext, useEffect, useState } from "react";
import { games } from "../assets/games/game";
import freegame from "../assets/games/freegame";
export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const addToCard = (itemID) => {
    if (!cartItems[itemID]) {
      setCartItems((prev) => ({ ...prev, [itemID]: 1 }));
    }
  };
  const removeFormCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = games.find((product) => product.id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price;
          console.log(totalAmount);
        } else 
        {
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
