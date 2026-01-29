import { useState } from "react";
import niveles from "./data/levels";
import Menu from "./components/Menu.jsx";
import Nivel from "./components/Nivel.jsx";
import SeleccionDeNivel from "./components/SeleccionDeNivel.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";
import "./App.css";


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
  };

  const comprobarRespuesta = () => {
  if (respuestaUsuario.toUpperCase() === niveles[nivelActual].respuesta) {

    Swal.fire({
      title: '¡Respuesta Correcta!',
      text: '¡Has acertado la respuesta!',
      icon: 'success',
      confirmButtonText: 'Continuar'
    },
    setPistaActual(0)
    
  
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

  } else {
    Swal.fire("Incorrecto", "Respuesta incorrecta", "error");
    setRespuestaUsuario("");
  }
};


  const verPista = () => {
    if (pistaActual < 3) {
      setPistaActual(pistaActual + 1);
  };
  }
  const seleccionarNivel = (index) => {
    setNivelActual(index);
    setPantalla("nivel");
    setRespuestaUsuario("");
    setPistaActual(0);
  };

  const irSeleccionNivel = () => {
    setPantalla("seleccion");
  }

  return (

  <div>

    {pantalla === "menu" && (
      <div className="fondo-menu">
        <Menu
          empezarJuego={empezarJuego}
          irASeleccionNivel={irSeleccionNivel}
        />
      </div>
    )}

    {pantalla === "nivel" && (
      <div className="fondo-nivel">
        <Nivel
          nivelActual={nivelActual}
          niveles={niveles}
          respuestaUsuario={respuestaUsuario}
          setRespuestaUsuario={setRespuestaUsuario}
          comprobarRespuesta={comprobarRespuesta}
          pistaActual={pistaActual}
          verPista={verPista}
        />
      </div>
    )}

    {pantalla === "seleccion" && (
      <div className="fondo-seleccion">
        <SeleccionDeNivel seleccionarNivel={seleccionarNivel} />
      </div>
    )}

  </div>
);

  
}

export default App;