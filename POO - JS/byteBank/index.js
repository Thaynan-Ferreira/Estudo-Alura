//CRIAÇÃO DE CLASSE
class Cliente {
    //IMPLEMENTAÇÃO DE ATRIBUTOS
    Nome;
    CPF;
    Agencia;
    Saldo;
}

const cliente1 = new Cliente(); // INICIALIZAÇÃO DO OBJETO
const cliente2 = new Cliente();

cliente1.Nome = "Thaynan";
cliente1.CPF = "11122233309";
cliente1.Agencia = 1001;
cliente1.Saldo = 0;

cliente2.Nome = "Isabela";
cliente2.CPF = "88877766609";
cliente2.Agencia = 1001;
cliente2.Saldo = 0;

console.log(cliente1);