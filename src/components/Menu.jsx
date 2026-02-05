import Swal from 'sweetalert2';
import "./Menu.css";
import { useNavigate } from 'react-router-dom';

const Menu = () => {
const navigate= useNavigate();

const testAlert = () => {
  Swal.fire({
    title: '¿Cómo Jugar?',
    text: 'Observa la imagen, lee las pistas y arriesgá. Por cada pista vas a perder una estrella pero la imagen se verá más clara. ¡Suerte!',
    icon: 'info',
    confirmButtonText: 'Entendido'
  });
}

  return (
    <div className="contenedorMenu">
      <h1 className='titulo'>Juego Pelis</h1>

      <button className= "botones btnJugar" onClick={() => {navigate('/nivel/0');}}>
        Jugar
      </button>

      <button className='botones btnSeleccionarNivel' onClick={() => {navigate('/seleccion');}}>
        Seleccionar Nivel
      </button>

      <button className='botones btnComoJugar' onClick={testAlert}>
        Cómo Jugar
      </button>
    </div>
  )
};

export default Menu ;
