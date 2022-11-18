import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

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
