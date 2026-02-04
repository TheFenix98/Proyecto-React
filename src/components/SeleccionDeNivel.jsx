import "./SeleccionDeNivel.css";
import levels from "../data/levels";
import { useNavigate } from "react-router-dom";

const SeleccionDeNivel = ({ seleccionarNivel }) => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Seleccion de Nivel</h2>

      <div className="contenedorNiveles">
        {levels.map((nivel) => (
          <div className="cardNivel" key={nivel.id}>
            <h4>Nivel {nivel.id}</h4>

            <img
              src={nivel.imagen}
              alt={`Nivel ${nivel.id}`}
              className="imagenNivel"
              onClick={() => {
                seleccionarNivel(nivel.id - 1);
                navigate('/nivel');
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SeleccionDeNivel;
