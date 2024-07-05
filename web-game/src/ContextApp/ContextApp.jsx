import { createContext, useRef, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({children}) =>{
    const myDivRef = useRef(200);

    const[currentIndex,addCurrentIndex] = useState(0);
    const itemWidth = myDivRef.current.offsetWidth +20;
    const track = document.querySelector('.text');
    const Next = ({width,track}) =>{
        addCurrentIndex(currentIndex++);
        track.style.transform = `tranlateX(-${currentIndex * 4 * width})`
        console.log(addCurrentIndex)
    }
    const AppValue = {
       Next,itemWidth,track 
    }
    return  <AppContext.Provider value={AppValue}>
        {children}
    </AppContext.Provider>
}