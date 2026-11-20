import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { buscarPontoPorId } from "../../services/api";

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
  return <p>Carregando informações do ponto...</p>;
}

  return (
  <div>
    <h1>Detalhes do Ponto</h1>

    <h2>{ponto.name}</h2>

    <p>Descrição: {ponto.description}</p>
    <p>Latitude: {ponto.latitude}</p>
    <p>Longitude: {ponto.longitude}</p>
  </div>
);

export default Detalhe;