function clicar() {
    var numeroEscolhido = document.querySelector("input.numero").value;
    var multiplicador = 1;
    var resposta = document.querySelector("div.resposta");
    
    while (multiplicador <= 10) {
        resposta.innerHTML += (`${numeroEscolhido} x ${multiplicador} = ${numeroEscolhido * multiplicador}<br>`);
        multiplicador++;
    }
}