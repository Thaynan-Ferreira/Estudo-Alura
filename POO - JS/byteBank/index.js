//CRIAÇÃO DE CLASSE
class Cliente {
    //CRIAÇÃO DE ATRIBUTOS
    nome;
    CPF;
    conta;
   
}

class ContaCorrente {
    agencia;
    #saldo = 0;

    sacar(valor){
        //CRIAÇÃO DO METODO
        if (valor >= this.#saldo) return; 

            this.#saldo -= valor;// A PALAVRA this SERVE PARA QUE O TESTE SEJA FEITO NA DETERMINADA CLASSE QUE FOR CHAMADA
            return valor;
            
        
        
    }

    depositar(valor) {
        if (valor <= 0 ) return;//EARLY RETURN
        
        this.#saldo += valor;
        
    }

}

const cliente1 = new Cliente(); // INICIALIZAÇÃO DO OBJETO
cliente1.nome = "Thaynan";
cliente1.CPF = "11122233309";

const cliente2 = new Cliente();
cliente2.nome = "Isabela";
cliente2.CPF = "88877766609";

const contaCorrenteThaynan = new ContaCorrente();
contaCorrenteThaynan.agencia = 1001;

contaCorrenteThaynan.depositar(1000)//CHAMANDO O METODO DE DEPOSITO
const valorSacado = contaCorrenteThaynan.sacar(500);//CHAMANDO O METODO
console.log(valorSacado);

console.log(contaCorrenteThaynan);
