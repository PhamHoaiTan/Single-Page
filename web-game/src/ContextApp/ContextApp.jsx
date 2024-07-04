import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({children}) =>{
    
    const[currentIndex,addCurrentIndex] = useState(0);
    const Previous = ({w,gs}) =>{
        addCurrentIndex(currentIndex++);
        gs.style.transform = `tranlateX(-${currentIndex * 4 * w})`
    }
    const AppValue = {
        Previous
    }
    return  <AppContext.Provider value={AppValue}>
        {children}
    </AppContext.Provider>
}