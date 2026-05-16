import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import { Navbar } from './componentes/navbar.jsx'
import { Inicio } from './paginas/Inicio.jsx'
import { Error } from './paginas/error.jsx'
import { Vieja } from './paginas/vieja.jsx'
import './App.css'
import { Boton } from './componentes/boton'
import { Boton2 } from './componentes/boton_2'
import { Tarjeta } from './componentes/tarejtausuario'
import {useState,useEffect, useContext } from 'react'
import CardInteractiva from './componentes/UseState';
import { Timer } from './componentes/Timer'

import { TemaProvider } from './componentes/provider.jsx'
import { Pagina } from './componentes/pagina.jsx' 



function App() {
  let texto = "Soy un boton de componente \n pero este texto lo heredo por objeto props"
  let texto2= "Soy un boton pero recibo por desestructurado {}  "
  const datosUsario ={
    codigo: 2020251678011,
    nombre: "Andres Lopez",
    carrera: "Ingenieria en telematica",
    curso: "Frontend ReactJS"

  }
	const [count , setCount] = useState(0);
	const increment = ()=>{
    setCount(count + 1);
  }
  
  const restar = ()=>{
    setCount(count - 1);
  }

  const [tecla , setTecla] = useState("") 

  useEffect(()=>{
    const manejarTecla = (event)=>{
      setTecla(prev => prev + event.key);
    }
  
    window.addEventListener("keydown" , manejarTecla);
    
    return () => {
      window.removeEventListener("keydown" , manejarTecla);
    }
    
  }, [])
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <main className="app-main"></main>
          <Routes>
          <Route path="/Inicio"              element={<Inicio />} />
          <Route path="/error"          element={<Error />} />
          <Route path="/Vieja"          element={<Vieja />} />

          </Routes>





      </BrowserRouter>

      <h2>Hola! Esta es mi pagina personal para el curso de ReactJS ACMUD, es una recopilacion total de todos los temas vistos, nada de IA la verdad prefiero mostrar lo que realmente aprendi y no pedirle a chatjepete que me haga un  marco centrado div. Solo inteligencia artesanal :3 </h2>
      <button> Hola soy un boton generico html! </button>
      <br/>
      <Boton text = {texto}/>
      <br/>
      <Boton2 text = {texto2}/>
      <br/>
      <Tarjeta {...datosUsario}>{<button>Yo soy un boton child </button>}</Tarjeta>
	    <h2 className='contador-h2'> {count} </h2>
      <button  onClick={increment} className='button'>+</button>
      <button  onClick={restar} className='button'>-</button>
	    <CardInteractiva/>
      <h2>Presiona algo con el teclado y UseEffect lo concatenara! : {tecla}</h2>
      <button onClick={() => setTecla("")}>Limpiar texto de arriba </button>
      <Timer/>
      <TemaProvider> <Pagina></Pagina></TemaProvider>

    </>
  )
}

export default App
