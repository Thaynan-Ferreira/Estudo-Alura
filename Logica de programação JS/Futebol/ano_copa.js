function pulaLinha() {

    document.write ("<br> <br>");

}

function escreva(frase) {

    document.write (frase);
    pulaLinha();

}

var anoCopa = 1930;

while (anoCopa <= 2022) {
    escreva(`Em ${anoCopa} teve copa do mundo!`);
    anoCopa += 4;
}

escreva("FIM!")