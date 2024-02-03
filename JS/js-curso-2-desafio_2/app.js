// 1.Criar uma função que exibe "Olá, mundo!" no console.

function ola() {
    console.log('Olá, mundo!');
}
ola();

// 2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibeNome(nome) {
    console.log(`Olá, ${nome}`);
}
exibeNome('Victor');

// 3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobro(numero) {
    return numero * 2;
}

let resultadoDobro = dobro(11);
console.log(resultadoDobro);

// 4.Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calculaMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

let resultadoMedia = calculaMedia(10, 10, 25);
console.log(resultadoMedia);

// 5.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maiorNumero (n1, n2) {
    return n1 > n2 ? n1 : n2;
}
let encontrarMaior = maiorNumero(20, 10);
console.log(encontrarMaior);

// 6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

function multiplicacao(numero) {
    return numero * numero;
}
let resultadoMultiplicacao = multiplicacao(1000);
console.log(resultadoMultiplicacao);