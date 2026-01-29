import { Button } from "react-bootstrap"

const GameOver = ({volverMenu}) => {
  return (
    <>
        <h2>GameOver</h2>

        <Button variant="primary" onClick={volverMenu}>Volver al Menú</Button>
    </>
  )
}

export default GameOver

