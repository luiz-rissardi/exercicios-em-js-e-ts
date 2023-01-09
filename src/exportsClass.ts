import { PayServiceType,Conta } from "./interfaces/IPayService.js";

class ServiceBradesco implements PayServiceType{
    private Lucros:number = 0;
    private Taxa:number = 0.05;
    constructor(){
    }
    PayService(ContaBancaria:Conta,value:number): void {
        ContaBancaria.creditos -= value
    }
    DepositService(ContaBancaria:Conta,value:number): void {
        this.Lucros += value * this.Taxa
        ContaBancaria.creditos += value - (value * this.Taxa)
    }
}

class ServiceSicredi implements PayServiceType{
    private Lucros:number = 0;
    private Taxa:number = 0.09;
    constructor(){
    }
    PayService(ContaBancaria:Conta,value:number): void {
        ContaBancaria.creditos -= value
    }
    DepositService(ContaBancaria:Conta,value:number): void {
        this.Lucros += value * this.Taxa
        ContaBancaria.creditos += value - (value * this.Taxa)
    }
}

class ServiceCaixa implements PayServiceType{
    private Lucros:number = 0;
    private Taxa:number = 0.15;
    constructor(){
    }
    PayService(ContaBancaria:Conta,value:number): void {
        ContaBancaria.creditos -= value
    }
    DepositService(ContaBancaria:Conta,value:number): void {
        this.Lucros += value * this.Taxa
        ContaBancaria.creditos += value - (value * this.Taxa)
    }
}


export {
    ServiceBradesco,
    ServiceCaixa,
    ServiceSicredi,
}