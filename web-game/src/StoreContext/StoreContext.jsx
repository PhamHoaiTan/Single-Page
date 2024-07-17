import { createContext, useEffect, useState} from "react";
import { games } from "../assets/games/game";
import freegame from "../assets/games/freegame";
import { gamesdiscount } from "../assets/games/gamesdiscount";
export const StoreContext = createContext(null);

export const StoreContextProvider = (props) =>{
    

    const [cartItems, setCartItems] = useState({});
    
    const addToCard = (itemID) =>{
        if(!cartItems[itemID]){
            setCartItems((prev)=>({...prev,[itemID]:1}))
        }
    }
    const removeFormCart = (itemID) =>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
    }
    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])
    const contextValue = {
            games,
            freegame,
            cartItems,
            setCartItems,
            addToCard,
            removeFormCart
            
    }
    return  (<StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>);
}