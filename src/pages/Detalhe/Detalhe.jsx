import { useParams } from "react-router-dom";

function Detalhe() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalhes do Ponto</h1>
      <p>ID do ponto: {id}</p>
    </div>
  );
}

export default Detalhe;