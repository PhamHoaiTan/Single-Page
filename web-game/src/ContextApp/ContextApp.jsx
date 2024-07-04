import { createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = ({children}) =>{

    let currentIndex = 0;
    const Previous = ({w,gs}) =>{
        currentIndex++;
        
    }
    const AppValue = {
        Previous
    }
    return  <AppContext.Provider value={AppValue}>
        {children}
    </AppContext.Provider>
}