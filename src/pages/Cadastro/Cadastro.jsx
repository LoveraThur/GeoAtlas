import "./Cadastro.css";

function Cadastro() {
  return (
    <div>
      <h1>Cadastrar Ponto</h1>
      
      <form>
        <div className="campo campo-nome">
            <label htmlFor="nome">Nome do Ponto:</label>

            <input
                type = "text"
                id= "nome"
                name= "nome"
                placeholder="Digite o nome do ponto"
                maxLength={100}
                required
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