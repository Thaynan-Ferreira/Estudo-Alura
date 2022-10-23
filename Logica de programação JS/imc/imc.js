function pulaLinha() {

    document.write ("<br>");

}

function escreva(frase) {

    document.write (frase);
    pulaLinha();

}

function calculaImc(peso, altura) {
        
    imc = peso / (altura*altura);

    return imc;

}

function clicar() {
    var nomeInformado = document.querySelector("input.nome").value   
    var alturaInformada = document.querySelector("input.altura").value;
    var pesoInformado = document.querySelector("input.peso").value;
    var resultado = document.querySelector("div.resposta");
    var resposta = calculaImc(pesoInformado, alturaInformada)
    resultado.innerHTML = `O IMC de ${nomeInformado} é ${resposta}`;

}



