import { Button } from "react-bootstrap";
import "./Nivel.css";
import niveles from "../data/levels";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";


const Nivel = ({
  niveles,
  respuestaUsuario,
  setRespuestaUsuario,
  pistaActual,
  verPista,
  mostrarPista
}) => {

  const navigate = useNavigate();
  const { nivelActual } = useParams();
  const nivelIndex = Number(nivelActual);
  const pasarAlSiguienteNivel = () => {
    const siguienteNivel = nivelIndex + 1;
    if (siguienteNivel < niveles.length) {
      navigate(`/nivel/${siguienteNivel }`);
    } else {
      navigate("/");
    }
  };

  const [imagenDesbloqueada, setImagenDesbloqueada] = useState(false);

  

  

  const handleRespuestaCorrecta = () => {
    const esCorrecta = respuestaUsuario.toUpperCase() === niveles[nivelIndex].respuesta;
    if (esCorrecta) { 
      setImagenDesbloqueada(true);
      setTimeout(() => {
        Swal.fire({
          title: '¡Respuesta Correcta!',
          text: '¡Has acertado la respuesta!',
          icon: 'success',
          confirmButtonText: 'Continuar'
        }).then(() => {
          setRespuestaUsuario("");
          pasarAlSiguienteNivel();
          setImagenDesbloqueada(false);
        });
      }, 500);
    } else {
      Swal.fire({
        title: 'Respuesta Incorrecta',
        text: 'Inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      setRespuestaUsuario("");
    }
  }

  // 🔒 VALIDACIÓN CLAVE
  if (
    isNaN(nivelIndex) ||
    !niveles ||
    nivelIndex < 0 ||
    nivelIndex >= niveles.length
  ) {
    return (
      <div className="contenedorNivel">
        <h2>Nivel inválido</h2>
        <Button variant="danger" onClick={() => navigate("/")}>
          Volver al menú
        </Button>
      </div>
    );
  }

  const nivel = niveles[nivelIndex];

  
if (nivel.tipo == "Pelicula") {
  nivel.id=nivel.id - 10;
}

  return (
    <div className={`granContenedorNivel ${mostrarPista ? "con-pista" : "sin-pista"}`}>

      <div className="contenedorNivel">

        <h2>Nivel {nivel.id}</h2>

        <img
          src={nivel.imagen}
          alt="Imagen del nivel"
          className={imagenDesbloqueada ? "imagen-nivel-correcta" : "imagen-nivel"}
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
        />

        <input
          type="text"
          value={respuestaUsuario}
          onChange={(e) => setRespuestaUsuario(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleRespuestaCorrecta();
            }
          }}
        />

        <div className="botones-nivel">
          <Button variant="success" onClick={handleRespuestaCorrecta}>
            Comprobar
          </Button>

          <Button variant="secondary" onClick={verPista}>
            Pista
          </Button>
        </div>

        <Button
          onClick={() => navigate("/")}
          variant="danger"
          className="btn-volver-menu"
        >
          Volver al Menú
        </Button>
      </div>

      {pistaActual > 0 && (
        <div className="pistas-nivel">
          {pistaActual >= 1 && <p>Pista 1: {nivel.pista1}</p>}
          {pistaActual >= 2 && <p>Pista 2: {nivel.pista2}</p>}
          {pistaActual >= 3 && <p>Pista 3: {nivel.pista3}</p>}
        </div>
      )}

    </div>
  );
};

export default Nivel;


        