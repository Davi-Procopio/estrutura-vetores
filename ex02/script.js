let opcao;

do {
    opcao = prompt('Digite "1" para gerar os números aleatórios:');

    if (opcao == "1") {

        let vetor = [];

        for (let i = 0; i < 7; i++) {
            let numero = Math.floor(Math.random() * 10) + 1;
            vetor[i] = numero;
        }

        alert("Números gerados: " + vetor + ".");

    } else {
        alert("Opção inválida! Tente novamente.");
    }

} while (opcao != "1");