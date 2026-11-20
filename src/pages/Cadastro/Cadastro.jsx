import "./Cadastro.css";
import { useState } from "react";
import { cadastrarPonto } from "../../services/api";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

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
    await cadastrarPonto(ponto);

    alert("Ponto cadastrado com sucesso!");

    setNome("");
    setDescricao("");
    setLatitude("");
    setLongitude("");

  } catch (erro) {
    console.error("Erro ao cadastrar ponto:", erro);
    alert("Não foi possível cadastrar o ponto.");
  }
}

    return (
      <div>
        <h1>Cadastrar Localização</h1>

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
              Cadastrar Ponto
            </button>
          </div>
        </form >
      </div>
    );
  }

export default Cadastro;
