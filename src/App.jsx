import { useState } from "react";
import niveles from "./data/levels";
import Menu from "./components/Menu.jsx";
import Nivel from "./components/Nivel.jsx";
import MenuSeleccion from "./components/MenuSeleccion.jsx";
import SeleccionPeliculas from "./components/SeleccionPeliculas.jsx";
import SeleccionSeries from "./components/SeleccionSeries.jsx";
import "./App.css";
import {Routes, Route} from 'react-router-dom';




function App() {
  const [nivelActual, setNivelActual] = useState(0);
  const [respuestaUsuario, setRespuestaUsuario] = useState("");
  const [pistaActual, setPistaActual] = useState(0);
  
  const verPista = () => {
    if (pistaActual < 3) {
      setPistaActual(pistaActual + 1);
  };
  }


  return (

  <>
  <Routes>

    <Route path="/" element={<Menu />} />

    <Route
    path="/nivel/:nivelActual"
    element={
    <Nivel
      niveles={niveles}
      respuestaUsuario={respuestaUsuario}
      setRespuestaUsuario={setRespuestaUsuario}
      pistaActual={pistaActual}
      verPista={verPista}
      nivelIndex={nivelActual}
      mostrarPista={pistaActual > 0}
      setPistaActual={setPistaActual}
    />
  }
/>

    <Route path="/seleccionPeliculas" element={
      <SeleccionPeliculas 
        seleccionarNivel={(nivel) => {
          setNivelActual(nivel);
          setRespuestaUsuario("");
          setPistaActual(0);
        }} 
      />
    }/>

    <Route path="/seleccionSeries" element={
      <SeleccionSeries 
        seleccionarNivel={(nivel) => {
          setNivelActual(nivel);
          setRespuestaUsuario("");
          setPistaActual(0);
        }} 
      />
    }/>

    <Route path="/menuSeleccion" element={
      <MenuSeleccion />
    }/>
  </Routes>
</>
);

  
}

export default App;