titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function consoleClicado() {
    console.log('O botão foi clicado');
}

function alertClicado() {
    alert('Eu amo JS');
}

function promptClicado() {
    let cidade = prompt('Qual cidade do Brasil você esteve?');

    alert(`Estive em ${cidade} e lembrei de você.`);
}

function somaClicado() {
    let n1 = parseInt(prompt('Digite o 1º número para somar'));
    let n2 = parseInt(prompt('Digite o 2º número para somar'));

    resultado = n1 + n2;

    alert(`A soma de ${n1} e ${n2} é igual ${resultado}`)
}

