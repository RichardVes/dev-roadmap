/*Desafio 2
Receba os dados como JSON:
Faça:
Transforme o JSON em array.
Use map() para obter os nomes.
Use filter() para encontrar personagens com nível maior que 20.
Transforme o resultado novamente em JSON.*/
const dados =
  '[{"nome":"Aragorn","nivel":20},{"nome":"Gandalf","nivel":30},{"nome":"Legolas","nivel":25}]';
const vetorDados = JSON.parse(dados);
const nomes = vetorDados.map((nome) => {
  return nome.nome;
});
const nivelMaior = vetorDados.filter((personagem) => personagem.nivel > 20);
console.log(nomes);
console.log(nivelMaior);
const saidaNomes = JSON.stringify(nomes);
const saidaNivelMaior = JSON.stringify(nivelMaior);
