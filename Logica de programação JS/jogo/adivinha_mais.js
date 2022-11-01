function compare() {
    var segredos = [];

    var numero = 1;
    while (numero <= 8) {
        var teste = false;
        var numeroAletorio = Math.round(Math.random() * 100);

        for (var posicao = 0; posicao < segredos.length; posicao++) {

            if (segredos[posicao] == numeroAletorio) {
                teste = true;
                break;
            }
        }

        if (teste == false) {
            segredos.push(numeroAletorio)
            numero++;
        }
    }
    console.log(segredos)
    var numPlayer = document.querySelector("input.numero").value

    var achou = false;
    for (var contador = 0; contador < segredos.length; contador++) {
        if (numPlayer == segredos[contador]) {
            alert("Você acertou")
            achou = true;
            break;
        }
    }

    if (achou == false) {
        
        alert("Você errou")
        
    }
}