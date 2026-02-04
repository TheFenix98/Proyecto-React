import { Button } from "react-bootstrap";
import "./Nivel.css";
import { useNavigate } from "react-router-dom";



const Nivel = ({ nivelActual, niveles, respuestaUsuario, setRespuestaUsuario, comprobarRespuesta, pistaActual, verPista,  mostrarPista, imagenDesbloqueada}) => {
    const navigate = useNavigate();

    return (
        <div className={`granContenedorNivel ${mostrarPista ? "con-pista" : "sin-pista"}`}>

  {/* COLUMNA IZQUIERDA */}
  <div className="contenedorNivel">

    <h2>Nivel {nivelActual + 1}</h2>

    <img
      src={niveles[nivelActual].imagen}
      alt="Imagen del nivel"
      className={imagenDesbloqueada ? "imagen-nivel-correcta" : "imagen-nivel"}
    />

    <input
      type="text"
      value={respuestaUsuario}
      onChange={(e) => setRespuestaUsuario(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          comprobarRespuesta();
        }
      }}
    />

    <div className="botones-nivel">
      <Button variant="success" onClick={comprobarRespuesta}>
        Comprobar
      </Button>

      <Button variant="secondary" onClick={verPista}>
        Pista
      </Button>
    </div>

    <Button onClick={() => navigate('/')} variant="danger" className="btn-volver-menu">
      Volver al Menú
    </Button>

  </div>


  {/* COLUMNA DERECHA */}
{pistaActual > 0 && (
  <div className="pistas-nivel">

    {pistaActual >= 1 && (
      <p>Pista 1: {niveles[nivelActual].pista1}</p>
    )}

    {pistaActual >= 2 && (
      <p>Pista 2: {niveles[nivelActual].pista2}</p>
    )}

    {pistaActual >= 3 && (
      <p>Pista 3: {niveles[nivelActual].pista3}</p>
    )}

  </div>
)}


  </div>

    );
}
export default Nivel;

        