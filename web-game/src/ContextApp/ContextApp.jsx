import { createContext, useEffect, useRef, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({children}) =>{
    
    const [itemWidth,setItemWidth] = useState(0)
    useEffect(() => {
        const items = document.querySelectorAll('.game');
        if (items.length > 0) {
          setItemWidth(items[0].offsetWidth + 60); 
        }
      }, []);
    const AppValue = {
            itemWidth
    }
    return  <AppContext.Provider value={AppValue}>
        {children}
    </AppContext.Provider>
}