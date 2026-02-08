import { useNavigate } from "react-router-dom"
import "./MenuSeleccion.css";
import peliculaIcon from "/claqueta.jpg";

const MenuSeleccion = () => {
  const navigate = useNavigate();

  return (
    <div className="contenedorMenuSeleccion">
      <h1 className="tituloMenuSeleccion">¡Selecciona que vas a adivinar!</h1>
      <div className="botonesMenuSeleccion">
        <button
         onClick={() => navigate('/seleccionPeliculas')}
         img={peliculaIcon}
         alt="Icono de película"
          >Peliculas
          
          </button>
        <button onClick={() => navigate('/seleccionSeries')}>Series</button>
      </div>
    </div>
  )
}

export default MenuSeleccion