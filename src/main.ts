import { ContaBancaria } from "./Poodependencyinversion.js"
import { ServiceBradesco } from "./exportsClass.js"
 
function Main(){
    const bradesco = new ServiceBradesco()
    const conta = new ContaBancaria(15634467234, 7000, true,bradesco);
    conta.Pagar(2000);
    conta.Depositar(1000)
    conta.Depositar(1000)
    conta.Depositar(1000)
    conta.Depositar(1000)
    conta.Depositar(1000)
    conta.Depositar(1000)
    conta.Depositar(1000)
    conta.Depositar(1000)
    console.log(conta);
    console.log(bradesco)
}

Main()