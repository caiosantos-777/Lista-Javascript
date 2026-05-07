
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


