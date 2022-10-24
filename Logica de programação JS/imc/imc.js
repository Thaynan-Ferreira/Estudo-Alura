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
    resultado.innerHTML = `O IMC de ${nomeInformado} é ${resposta}<br>`;

    if (resposta < 18.5) {
        resultado.innerHTML += `Cuidado ${nomeInformado} com o IMC ${resposta} você está abaixo do peso`;
    }

    else if (resposta >= 18.5 && resposta <= 35) {
        resultado.innerHTML += `Otimo ${nomeInformado}! com o IMC ${resposta} você está no peso ideal.`;
    }

    else {
        resultado.innerHTML += `Cuidado ${nomeInformado} com o IMC ${resposta} você está acima do peso`;
    }

}



