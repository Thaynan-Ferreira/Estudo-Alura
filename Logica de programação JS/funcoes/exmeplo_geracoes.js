function pulaLinha() {

    document.write ("<br>");

}

function escreva(frase) {

    document.write (frase);
    pulaLinha();

}

var anoAtual = 2022;
idadeMediauandoTemFilho = 28;
var geracao = (anoAtual - 1500) / idadeMediauandoTemFilho;

escreva (`No ano de ${anoAtual} nos estamos na geração ${Math.round(geracao)}`);