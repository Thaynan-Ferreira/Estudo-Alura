import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Thaynan", "11122233309"); // INICIALIZAÇÃO DO OBJETO

const cliente2 = new Cliente("Isabela", "88877766609");

const contaCorrenteThaynan = new ContaCorrente(1001, cliente1);

const ContaCorrenteIsabela = new ContaCorrente(1001, cliente2);

contaCorrenteThaynan.depositar(1000);//CHAMANDO O METODO DE DEPOSITO
contaCorrenteThaynan.transferir(400, ContaCorrenteIsabela);
contaCorrenteThaynan.depositar(100);

console.log(cliente2.cpf)