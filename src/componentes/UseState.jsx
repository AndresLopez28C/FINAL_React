// Importamos el useState de React
import { useState } from "react";

const CardInteractiva = ()=>{
    // El estado inicial del modo oscuro del componente será "false"
    const [isDarkMode , setIsDarkMode] = useState(false);

    // Declaramos Los estilos de los dos componentes
    const estilosContendor = {
        backgroundColor: isDarkMode ? '#1A1A1A' : '#F9F9F9', 
        color: isDarkMode ? '#A4133C' : '#000000',
        padding: '1rem',
        borderRadius: '0.015rem',
        textAlign: 'center',
        transition: 'all .3s ease'
    };
    
    const estilosBoton = {
        backgroundColor: isDarkMode ? '#FDCB6E' : '#6c5ce7',
        color: 'white',
        border: 'none',
        outLine: 'none',
        borderRadius: '.5rem',
        marignTop: '.625rem',
        fontWeight: 'bold'
    };


    return(<>
        <div className="contenedor" style={estilosContendor}>
            <h3 className="title">{isDarkMode ? 'Modo Oscuro Activo' : 'Modo Claro Activo'}</h3>
            <p className="p__contenedor">Soy un componente UseEstate, cambiare entre diferentes estados!</p>
            <button className="btn" style={estilosBoton} onClick={()=>{setIsDarkMode(!isDarkMode)}}>
                Cambiar a {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
            </button>
        </div>
    
    </>)
}

export default CardInteractiva