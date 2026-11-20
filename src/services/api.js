const API_URL = "http://localhost:8080/api/points";

export async function buscarPontos() {

    const resposta = await fetch(API_URL);

    if (!resposta.ok) {
        throw new Error("Erro ao buscar os pontos.");
     }
    const dados = await resposta.json();

  return dados;
}
export async function cadastrarPonto(ponto) {
  const resposta = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ponto),
  });

  if (!resposta.ok) {
    throw new Error("Erro ao cadastrar o ponto.");
  }

  return await resposta.json();
}
export async function buscarPontoPorId(id) {
  const resposta = await fetch(`${API_URL}/${id}`);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar o ponto.");
  }

  const dados = await resposta.json();

  return dados;
}