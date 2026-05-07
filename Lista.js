

let soma = 0;
let continuar = true;

while (continuar) {

    let numero = Number(prompt("Digite um número:"));
    soma += numero;

    continuar = confirm("Deseja continuar?");

}

alert("A soma total dos números informados é: " + soma);

