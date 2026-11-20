import "./Cadastro.css";
import { useState } from "react";

function Cadastro() {

  const [latitude, setLatitude] = useState("");

function handleLatitudeChange(event) {
  const valor = event.target.value;

  if (/^\d{0,2}$/.test(valor)) {
    setLatitude(valor);
  }
}
  return (
    <div>
      <h1>Cadastrar Localização</h1>
      
      <form>
        <div className="campo campo-nome">
            <label htmlFor="nome">Nome da Localização:</label>

            <input
                type = "text"
                id= "nome"
                name= "nome"
                placeholder="Digite o nome da Localização"
                maxLength={35}
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
                
            />
           

        </div>
        <div className="campo campo-latitude" >
            <label htmlFor="descricao">Latitude</label>

            <input
                type="text"
                inputMode="numeric"
                id="latitude"
                name="latitude"
                placeholder="Latitude"
                maxLength= {2}
                value={latitude}
               onChange={handleLatitudeChange} 
            />
           

        </div>


        <div className="container-botao-cadastrar">
            <button className="botao-cadastrar" type = "submit">
                Cadastrar Ponto
            </button>
        </div>

      </form>
    </div>
  );
}

export default Cadastro;