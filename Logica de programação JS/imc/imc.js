function pulaLinha() {

    document.write ("<br>");

}

function escreva(frase) {

    document.write (frase);
    pulaLinha();

}

function calculaImc(peso, altura) {
    
    imc = peso / (altura*altura);
    escreva(`O IMC de quem tem ${altura}m de altura e ${peso}kg é ${Math.round(imc)}`);

}

var peso = 73;
var altura = 1.71;
calculaImc(peso, altura);

var peso2 = 100;
var altura2 = 1.5;
calculaImc(peso2, altura2);



