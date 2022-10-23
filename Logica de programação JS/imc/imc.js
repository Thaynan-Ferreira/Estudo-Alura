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

var peso = 73;
var altura = 1.71;
var imc1 = calculaImc(peso, altura);
escreva(`O IMC de quem tem ${altura}m de altura e ${peso}kg é ${Math.round(imc1)}`);

var peso2 = 68;
var altura2 = 1.72;
var imc2 = calculaImc(peso2, altura2);
escreva(`O IMC de quem tem ${altura}m de altura e ${peso}kg é ${Math.round(imc2)}`);




