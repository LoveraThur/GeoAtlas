import { Link } from "react-router-dom";

function NaoEncontrado() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <Link to="/pontos">Voltar para o início</Link>
    </div>
  );
}

export default NaoEncontrado;