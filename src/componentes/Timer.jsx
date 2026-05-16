import { useState , useEffect } from "react";

export function Timer(){
    const [segundos , setSegundos] = useState(0);
    const [active , setActive] = useState(true)

    useEffect(()=>{

        if(!active) return;

        const intervalo = setInterval(()=>{
            setSegundos(previo => previo + 1)
        } , 1000)

        return () => {
            clearInterval(intervalo);
        }

    }, [active])
    

    return(<>


        <h2>Llevas  {segundos} segundos en esta pagina :o </h2>
    
    </>)
}