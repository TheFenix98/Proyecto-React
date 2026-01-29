import Swal from 'sweetalert2';
import "./Menu.css";

const testAlert = () => {
  Swal.fire({
    title: '¿Cómo Jugar?',
    text: 'Observa la imagen, lee las pistas y arriesgá. Por cada pista vas a perder una estrella pero la imagen se verá más clara. ¡Suerte!',
    icon: 'info',
    confirmButtonText: 'Entendido'
  });
}
const Menu = ({ empezarJuego, irASeleccionNivel }) => {



  return (
    <div className="contenedorMenu">
      <h1 className='titulo'>Juego Pelis</h1>

      <button className= "botones btnJugar" onClick={empezarJuego}>
        Jugar
      </button>

      <button className='botones btnSeleccionarNivel' onClick={irASeleccionNivel}>
        Seleccionar Nivel
      </button>

      <button className='botones btnComoJugar' onClick={testAlert}>
        Cómo Jugar
      </button>
    </div>
  )
}

export default Menu
