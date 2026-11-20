import "./Cadastro.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  cadastrarPonto,
  buscarPontoPorId,
  atualizarPonto,
} from "../../services/api";

function Cadastro() {

  const { id } = useParams();
  const navigate = useNavigate();

  const modoEdicao = Boolean(id);

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

useEffect(() => {
  if (modoEdicao) {
    async function carregarPonto() {
      try {
        const dados = await buscarPontoPorId(id);

        setNome(dados.name);
        setDescricao(dados.description || "");
        setLatitude(String(dados.latitude));
        setLongitude(String(dados.longitude));

      } catch (erro) {
        console.error("Erro ao carregar ponto:", erro);
        alert("Não foi possível carregar o ponto.");
      }
    }

    carregarPonto();
  }
}, [id, modoEdicao]);

  function handleLatitudeChange(event) {
    const valor = event.target.value;

    if (
      valor === "" ||
      valor === "-" ||
      (/^-?\d*\.?\d*$/.test(valor) && // instrução regex
        Number(valor) >= -90 &&
        Number(valor) <= 90)
    ) {
      setLatitude(valor);
    }
  }

  function handleLongitudeChange(event) {
    const valor = event.target.value;

    if (
      valor === "" ||
      valor === "-" ||
      (/^-?\d*\.?\d*$/.test(valor) &&
        Number(valor) >= -180 &&
        Number(valor) <= 180)
    ) {
      setLongitude(valor);
    }
  }
  async function handleSubmit(event) {
  event.preventDefault();

  const ponto = {
    name: nome,
    description: descricao,
    latitude: Number(latitude),
    longitude: Number(longitude),
  };

  try {
    if (modoEdicao) {
      await atualizarPonto(id, ponto);
      alert("Ponto atualizado com sucesso!");
    } else {
      await cadastrarPonto(ponto);
      alert("Ponto cadastrado com sucesso!");
    }

    navigate("/pontos");

  } catch (erro) {
    console.error("Erro ao salvar ponto:", erro);
    alert("Não foi possível salvar o ponto.");
  }
}


    return (
      <div>
        <h1>{modoEdicao ? "Editar Localização" : "Cadastrar Localização"}</h1>

        <form onSubmit={handleSubmit}>
          <div className="campo campo-nome">
            <label htmlFor="nome">Nome da Localização:</label>

            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite o nome da Localização"
              maxLength={35}
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              required
            />
          </div>
          <div className="campo campo-descricao">
            <label htmlFor="descricao">Descrição</label>

            <input
              type="text"
              id="descricao"
              name="descricao"
              placeholder="Descrição da Localização"
              maxLength={150}
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
            />
          </div>
          <div className="campo campo-latitude">
            <label htmlFor="descricao">Latitude</label>

            <input
              type="text"
              inputMode="decimal"
              id="latitude"
              name="latitude"
              placeholder="Latitude"
              value={latitude}
              onChange={handleLatitudeChange}
              required
            />
          </div>

          <div className="campo campo-longitude">
            <label htmlFor="longitude">Longitude:</label>

            <input
              type="text"
              inputMode="decimal"
              id="longitude"
              name="longitude"
              placeholder="Longitude"
              value={longitude}
              onChange={handleLongitudeChange}
              required
            />
          </div>

          <div className="container-botao-cadastrar">
            <button className="botao-cadastrar" type="submit">
              {modoEdicao ? "Salvar Alterações" : "Cadastrar Ponto"}
            </button>
          </div>
        </form >
      </div>
    );
  }

export default Cadastro;
