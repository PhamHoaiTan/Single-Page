import { createContext} from "react";
import { games } from "../assets/games/game";
import freegame from "../assets/games/freegame";
import { gamesdiscount } from "../assets/games/gamesdiscount";
export const StoreContext = createContext(null);

export const StoreContextProvider = ({props}) =>{
    
  
    const contextValue = {
            games,
            freegame,
            gamesdiscount
    }
    return  <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
}