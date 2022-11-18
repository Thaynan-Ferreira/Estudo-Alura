export class ContaCorrente {
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
