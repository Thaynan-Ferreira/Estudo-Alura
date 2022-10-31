function compare() {
    var segredos = [5, 7, 10, 2];
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