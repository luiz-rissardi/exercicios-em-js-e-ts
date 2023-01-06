import {Conta,PayServiceType} from "./interfaces/IPayService.js"

class ContaBancaria implements Conta{
    Nconta!: number;
    creditos!: number;
    ativada!: boolean;
    constructor(nconta:number,creditos:number,ativa:boolean,private Service:PayServiceType){
        this.Nconta = nconta;
        this.ativada = ativa;
        this.creditos = creditos;
    }
    Pagar(value:number):string{
        if(this.ativada){
            if(value<this.creditos){
                this.Service.PayService(this,value)
                return "pagamento realizado com sucesso!"
            }else
            {
                throw "não é possivel realizar o pagamento!"
            }
        }else
        throw "A conta está desativada!"
    }

    Depositar(value:number):string{
        if(this.ativada){
            this.Service.DepositService(this,value);
            return "Deposito realizado com sucesso!";
        }else{
            throw "A conta está desativada!"
        }
    }
    
}

export {
    ContaBancaria
}