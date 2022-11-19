export class Cliente {
    //CRIAÇÃO DE ATRIBUTOS
    nome;
    #cpf;
    
    //CRIAÇÃO DOS ACESSORES
    get cpf() {
        return this.#cpf;
    }


    //CRIAÇÃO DE CONSTRUTOR
    constructor(nome, cpf) {
        this.nome = nome;
        this.#cpf = cpf;
    }
}