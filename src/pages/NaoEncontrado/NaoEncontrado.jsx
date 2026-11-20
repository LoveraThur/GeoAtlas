import { Link } from "react-router-dom";

function NaoEncontrado() {
  return (
    <div>
      <h1>Ops! Página não encontrada.</h1>

      <p>
        O endereço que você tentou acessar não existe.
      </p>

      <Link to="/pontos">
        Voltar para a lista de pontos
      </Link>
    </div>
  );
}

export default NaoEncontrado;