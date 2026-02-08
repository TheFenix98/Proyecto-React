import "./SeleccionDeNivel.css";
import levels from "../data/levels";
import { useNavigate} from "react-router-dom";

const SeleccionPeliculas = ({ seleccionarNivel }) => {
  const navigate = useNavigate();

  const peliculas=[];

  levels.forEach((nivel) => {
    if (nivel.tipo === "Pelicula") {
      peliculas.push(nivel);
    }
  });

  return (
    <div className="contenedorSeleccionDeNivel">
      <h2 className="tituloSeleccionDeNivel">Adivina la Pelicula</h2>

      <div className="contenedorNiveles">
        {peliculas.map((nivel) => (
          <div className="cardNivel" key={nivel.id}>
            <h4>Nivel {nivel.id - 10}</h4>

            <img
              src={nivel.imagen}
              alt={`Nivel ${nivel.id}`}
              className="imagenNivel"
              onClick={() => {
                seleccionarNivel(nivel.id - 1);
                navigate(`/nivel/${nivel.id - 1}`);
              }}
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeleccionPeliculas;