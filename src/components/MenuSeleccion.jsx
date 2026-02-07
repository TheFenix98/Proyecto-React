import { useNavigate } from "react-router-dom"

const MenuSeleccion = () => {
  const navigate = useNavigate();

  return (
    <div className="contenedorMenuSeleccion">
        <button onClick={() => navigate('/seleccionPeliculas')}>Peliculas</button>
        <button onClick={() => navigate('/seleccionSeries')}>Series</button>
    </div>
  )
}

export default MenuSeleccion