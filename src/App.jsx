import { useState } from "react";
import niveles from "./data/levels";
import Menu from "./components/Menu.jsx";
import Nivel from "./components/Nivel.jsx";
import SeleccionDeNivel from "./components/SeleccionDeNivel.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";
import "./App.css";
import {Routes, Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function App() {

  const [pantalla, setPantalla] = useState("menu");
  const [nivelActual, setNivelActual] = useState(0);
  const [respuestaUsuario, setRespuestaUsuario] = useState("");
  const [pistaActual, setPistaActual] = useState(0);
  

  const empezarJuego = () => {
    setPantalla("nivel");
    setNivelActual(0);
    setRespuestaUsuario("");
    setPistaActual(0);
    setImagenDesbloqueada(false);
  };

  const comprobarRespuesta = () => {
  if (respuestaUsuario.toUpperCase() === niveles[nivelActual].respuesta) {
    setImagenDesbloqueada(true);

    setTimeout(() => {
      Swal.fire({
      title: '¡Respuesta Correcta!',
      text: '¡Has acertado la respuesta!',
      icon: 'success',
      confirmButtonText: 'Continuar'
    },
    setPistaActual(0),
    setImagenDesbloqueada(false)
    
  
  ).then(() => {

      if (nivelActual + 1 < niveles.length) {
        setNivelActual(nivelActual + 1);
        setRespuestaUsuario("");
      } else {

        Swal.fire({
          title: '¡Felicidades!',
          text: '¡Has completado todos los niveles!',
          icon: 'success',
          confirmButtonText: 'Volver al Menú'
        });

        setPantalla("menu");
        setNivelActual(0);
        
      }

    });
      
    }, 700); // Retraso de 700 ms para mostrar la imagen desbloqueada
  

  } else {
    Swal.fire("Incorrecto", "Respuesta incorrecta", "error");
    setRespuestaUsuario("");
    setImagenDesbloqueada(false);
  }
};


  const verPista = () => {
    if (pistaActual < 3) {
      setPistaActual(pistaActual + 1);
  };
  }


  return (
    
  <Routes>

    <Route path="/" element={<Menu />} />

    <Route
    path="/nivel/:nivelActual"
    element={
    <Nivel
      niveles={niveles}
      respuestaUsuario={respuestaUsuario}
      setRespuestaUsuario={setRespuestaUsuario}
      comprobarRespuesta={comprobarRespuesta}
      pistaActual={pistaActual}
      verPista={verPista}
      nivelIndex={nivelActual}
    />
  }
/>

    <Route path="/seleccion" element={
      <SeleccionDeNivel 
        seleccionarNivel={(nivel) => {
          setNivelActual(nivel);
          setPantalla("nivel");
          setRespuestaUsuario("");
          setPistaActual(0);
          setImagenDesbloqueada(false);
        }} 
      />
    }/>
  </Routes>
);

  
}

export default App;