//CRIAÇÃO DE CLASSE
class Cliente {
    //IMPLEMENTAÇÃO DE ATRIBUTOS
    nome;
    CPF;
    conta;
   
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        //CRIAÇÃO DO METODO
        if (valor <= this.saldo) {
            this.saldo -= valor;// A PALAVRA this SERVE PARA QUE O TESTE SEJA FEITO NA DETERMINADA CLASSE QUE FOR CHAMADA 
        }
    }

    depositar(valor) {
        if (valor > 0 ) {
            this.saldo += valor;
        }
        
    }

}

const cliente1 = new Cliente(); // INICIALIZAÇÃO DO OBJETO
cliente1.nome = "Thaynan";
cliente1.CPF = "11122233309";

const cliente2 = new Cliente();
cliente2.nome = "Isabela";
cliente2.CPF = "88877766609";

const contaCorrenteThaynan = new ContaCorrente();
contaCorrenteThaynan.saldo = 0;
contaCorrenteThaynan.agencia = 1001;
console.log(contaCorrenteThaynan.saldo);

contaCorrenteThaynan.depositar(1000)//CHAMANDO O METODO DE DEPOSITO

console.log(contaCorrenteThaynan.saldo);

contaCorrenteThaynan.sacar(500);//CHAMANDO O METODO

console.log(contaCorrenteThaynan.saldo)

console.log(cliente1);
console.log(cliente2)