import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { buscarPontos, excluirPonto } from "../../services/api";

function Listagem() {
  const [pontos, setPontos] = useState([]);

  useEffect(() => {
    async function carregarPontos() {
      try {
        const dados = await buscarPontos();
        setPontos(dados);
      } catch (erro) {
        console.error("Erro ao carregar pontos:", erro);
      }
    }

    carregarPontos();
  }, []);
  async function handleExcluir(id) {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este ponto?"
    );

    if (!confirmar) {
      return;
    }

    try {
      await excluirPonto(id);

      alert("Ponto excluído com sucesso!");

      const dados = await buscarPontos();
      setPontos(dados);

    } catch (erro) {
      console.error("Erro ao excluir ponto:", erro);
      alert("Não foi possível excluir o ponto.");
  }
}

  return (
    <div>
      <h1>Lista de Pontos Geográficos</h1>

      {pontos.length === 0 ? (
        <p>Nenhum ponto cadastrado.</p>
      ) : (
        pontos.map((ponto) => (
          <div key={ponto.id}>
            <h2>{ponto.name}</h2>

            <p>{ponto.description}</p>
            <p>Latitude: {ponto.latitude}</p>
            <p>Longitude: {ponto.longitude}</p>

            <Link to={`/pontos/${ponto.id}`}>
              Ver detalhes
            </Link>

            <Link to={`/pontos/${ponto.id}/editar`}>
              Editar
            </Link>
            <button onClick={() => handleExcluir(ponto.id)}>
              Excluir
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Listagem;
