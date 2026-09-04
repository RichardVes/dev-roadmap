/*Exercício 8 — Escopo
Sem executar o código, diga o que acontece em cada console.log:
    const curso = "TADS";
    function mostrarCurso() {
    const semestre = 4;
    console.log(curso);
    console.log(semestre);
    }
    mostrarCurso();
    console.log(curso);
    console.log(semestre);
Quero que você responda:
    1. console.log(curso) dentro da função → ?
    2. console.log(semestre) dentro da função → ?
    3. console.log(curso) fora da função → ?
    4. console.log(semestre) fora da função → ?
E principalmente: explique por que o último acontece ou não acontece.
Esse exercício é importante antes de avançarmos para os desafios de Funções.*/
1- Um bloco interno enxerga as variaveis do bloco esterno porem o mesmo nao acontece, logo a saida é TADS;
2- Como semestre foi definido dentro do bloco recebe o valor 4
3- Como a variavel foi criado fora do bloco da function vai receber o valor "TADS"  
4- Como foi definido em um bloco superior (externo) a variavel nao encherga o valor entao para o sistema  ele nao foi definido.