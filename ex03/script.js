let entrada = prompt("Digite os números, separe-os por vírgulas:");
let vetor = entrada.split(",");

// converter para número
for (let i = 0; i < vetor.length; i++) {
    vetor[i] = parseInt(vetor[i]);
}

let numero = parseInt(prompt("Digite um número para verificar:"));

let contador = 0;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] == numero) {
        contador++;
    }
}

if (contador > 0) {
    alert("O número aparece " + contador + " vezes no vetor.");
} else {
    alert("O número não aparece no vetor.");
}