let entrada = prompt("Digite 10 números separados por vírgula:");
let vetor = entrada.split(",");

let semDuplicados = [];

for (let i = 0; i < vetor.length; i++) {

    let jaExiste = false;

    for (let j = 0; j < semDuplicados.length; j++) {
        if (vetor[i] == semDuplicados[j]) {
            jaExiste = true;
        }
    }

    if (jaExiste == false) {
        semDuplicados.push(vetor[i]);
    }

}

alert("Vetor original: " + vetor);
alert("Sem duplicados: " + semDuplicados);