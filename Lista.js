
1
let soma = 0;
let continuar = true;

while (continuar) {

    let numero = Number(prompt("Digite um número:"));
    soma += numero;

    continuar = confirm("Deseja continuar?");

}

alert("A soma total dos números informados é: " + soma);


2
for (let i = 10; i >= 0; i--) {

    console.log(i);

}

console.log("Lançamento realizado!");


3
let ganhoAnual = 0;
let gastoAnual = 0;

for (let mes = 1; mes <= 12; mes++) {

    let ganho = Number(prompt("Digite o ganho do mês " + mes + ":"));
    let gasto = Number(prompt("Digite o gasto do mês " + mes + ":"));

    ganhoAnual += ganho;
    gastoAnual += gasto;

}

let saldo = ganhoAnual - gastoAnual;

alert("Ganho bruto anual: R$ " + ganhoAnual);
alert("Gasto anual: R$ " + gastoAnual);
alert("Saldo financeiro anual: R$ " + saldo);

if (saldo > 0) {

    alert("A empresa teve Lucro.");

} else if (saldo < 0) {

    alert("A empresa teve Prejuízo.");

} else {

    alert("A empresa ficou no zero a zero.");

}


4
let numeros = [];

for (let i = 1; i <= 4; i++) {

    let valor = Number(prompt("Digite o " + i + "º valor inteiro:"));
    numeros.push(valor);

}

numeros.sort(function(a, b) {
    return b - a;
});

console.log("Números em ordem decrescente:");
console.log(numeros);


5
let numero = Number(prompt("Digite um número inteiro:"));

if (numero % 2 == 0) {

    numero += 1;
    console.log("O número era par e foi transformado em ímpar:");
    console.log(numero);

} else {

    numero -= 1;
    console.log("O número era ímpar e foi transformado em par:");
    console.log(numero);

}