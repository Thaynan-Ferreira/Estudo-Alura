function clicar() {
    //puxando os valores do HTML
    var nome = document.querySelector("input.nome").value
    var vitorias = document.querySelector("input.vitorias").value;
    var empates = document.querySelector("input.empates").value;
    var resposta = document.querySelector("div.resposta");

    //calculando pontos
    var pontosVitorias = vitorias * 3;
    var pontosEmpates = Number(empates);
    var totalPontos = pontosEmpates + pontosVitorias;

    resposta.innerHTML = (`No ano passado seu time fez 28 pontos<br>`)
    resposta.innerHTML += (`O Time do ${nome} com ${vitorias}V e ${empates}E possui ${totalPontos} pontos<br>`);

    if (totalPontos < 28) {
        resposta.innerHTML += (`Com ${totalPontos} seu time está pior que ano passado`)
    }

    else if (totalPontos == 28) {
        resposta.innerHTML += (`Com ${totalPontos} seu time está igual que ano passado`)
    }

    else {
        resposta.innerHTML += (`Com ${totalPontos} seu time está melhor que ano passado que ano passado`)
    }
}