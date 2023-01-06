interface PayServiceType{
    PayService(ContaBancaria:Conta,value:number):void;
    DepositService(ContaBancaria:Conta,value:number):void;
}

interface Conta{
    creditos: number;
    Nconta:number;
    ativada:boolean;
}

export {
    PayServiceType,
    Conta,
}