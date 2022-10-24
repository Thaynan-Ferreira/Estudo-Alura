function clicar() {
    //puxando os valores do HTML
    var nome = document.querySelector("input.nome").value
    var vitorias = document.querySelector("input.vitorias").value;
    var empates = document.querySelector("input.empates").value;
    var resposta = document.querySelector("div.resposta");

    //calculando pontos
    var pontosVitorias = vitorias * 3;
    var pontosEmpates = Number(empates);

    resposta.innerHTML = (`O Time do ${nome} com ${vitorias}V e ${empates}E possui ${pontosEmpates + pontosVitorias} pontos`);
}