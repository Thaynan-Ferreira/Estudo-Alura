import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    
    //ATRIBUTOS
    static numeroDeContas = 0;
    agencia;
    #cliente;
    #saldo = 0;
    

    //ACESSORES
    set cliente(novoValor) {
        if(novoValor instanceof Cliente){
            this.#cliente = novoValor;
        }
        
    }

    get cliente(){
        return this.#cliente;
    }


    get saldo() { //O GET PERMITE A LEITURA DO ATRIBUTO SEM O EXPOR PARA EXECUÇÃO

        return this.#saldo;

    }

    //CONSTRUTORES
    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1
    }


    //METODOS
    sacar(valor){
        //CRIAÇÃO DO METODO
        if (valor >= this.#saldo) return; 

        this.#saldo -= valor;// A PALAVRA this SERVE PARA QUE O TESTE SEJA FEITO NA DETERMINADA CLASSE QUE FOR CHAMADA
        return valor;
        
    }

    depositar(valor) {
        if (valor <= 0 ) return;//EARLY RETURN
        
        this.#saldo += valor;
        console.log(this.#cliente);
        console.log(this.#saldo);
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }

}
