
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { buscarPontoPorId } from "../../services/api";
import "./Detalhe.css";

function Detalhe() {
  const { id } = useParams();
  const [ponto, setPonto] = useState(null);

  useEffect(() => {
    async function carregarPonto() {
      try {
        const dados = await buscarPontoPorId(id);
        setPonto(dados);
      } catch (erro) {
        console.error("Erro ao carregar ponto:", erro);
      }
    }

    carregarPonto();
  }, [id]);

  if (ponto === null) {
    return <p className="detalhe-carregando">Carregando informações do ponto...</p>;
  }

  return (
    <main className="detalhe-container">
      <div className="detalhe-card">

        <header className="detalhe-header">
          <span className="detalhe-subtitulo">GEOPONTO</span>
          <h1>Detalhes do Ponto</h1>
          <h2>{ponto.name}</h2>
          <p>Informações do local cadastrado</p>
        </header>

        <section className="detalhe-conteudo">

          <div className="detalhe-bloco">
            <h3>Descrição</h3>
            <p>{ponto.description || "Nenhuma descrição informada."}</p>
          </div>

          <div className="detalhe-bloco">
            <h3>Coordenadas geográficas</h3>

            <div className="coordenada">
              <span>Latitude</span>
              <strong>{ponto.latitude}</strong>
            </div>

            <div className="coordenada">
              <span>Longitude</span>
              <strong>{ponto.longitude}</strong>
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}

export default Detalhe;
