import { useContext } from "react";
import { TemaContext } from "./context"; 

export function Pagina(){
    const {anime, alternarTema} = useContext(TemaContext); // ✅

    return(
        <>
            <div className={`pagina ${anime ? "Anime1" : "Anime2"}`}>
                <h1>Este componente div cambiara gracias a un provider y a un Contexto</h1>
                <h1 className={`titulo ${anime ? "Anime1" : "Anime2"}`}>
                    {anime ? "Full Metal Alchemist" : "Death Note"}
                </h1>

                <button className="btn" onClick={alternarTema}> 
                    Cambiar Tema de este div
                </button>
            </div>
        </>
    )
}