import { ContaBancaria } from "./Poodependencyinversion.js";
import { ServiceSicredi } from "./exportsClass.js";
function Main() {
    const banco = new ServiceSicredi();
    const conta = new ContaBancaria(15634467234, 7000, true, banco);
    conta.Pagar(2000);
    conta.Depositar(1000);
    conta.Depositar(1000);
    conta.Depositar(1000);
    conta.Depositar(1000);
    conta.Depositar(1000);
    conta.Depositar(1000);
    conta.Depositar(1000);
    conta.Depositar(1000);
    console.log(conta);
    console.log(banco);
}
Main();
