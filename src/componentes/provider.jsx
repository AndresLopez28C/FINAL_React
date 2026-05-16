import { useState } from "react";
import { TemaContext } from "./context";

export function TemaProvider({children}){
    const [anime, setanime]= useState(false);

    const alternarTema = ()=>{
        setanime(!anime);
    }

    return(<>
        <TemaContext.Provider value={{anime , alternarTema}}>
            {children}
        </TemaContext.Provider>
    </>)
}