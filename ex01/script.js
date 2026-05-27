let entrada = prompt("Digite 10 números separados por vírgula:");
let vetor = entrada.split(",");

let soma = 0;

for (let i = 0; i < vetor.length; i++) {

    let numero = parseInt(vetor[i]);

    if (numero % 2 === 0) {
        soma = soma + numero;
    }

}

alert("Soma dos números pares: " + soma + ".");