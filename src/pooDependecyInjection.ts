

class cartao{
     private nCard !:string;
     private rateLimit!:number;
     private saldo!:number;
    constructor(ncard:string,limit:number,saldo:number,private payService:PayService){
        this.Limit = limit;
        this.Saldo = saldo;
        this.card = ncard;
    }

    pagar(value:number):void{
        this.payService.Pay(this,value)
    }
    
    public get card() : string {
        return this.nCard
    }
    public get Limit() : number {
        return this.rateLimit
    }
    
    public set card(v : string) {
        this.nCard = v;
    }

    public set Saldo(v : number) {
        this.saldo = v;
    }

    public set Limit(v : number) {
        this.rateLimit = v;
    }

    public get Saldo():number {
        return this.saldo
    }
    
}

class PayService{
    constructor(){
    }
    Pay(card:cartao,value:number){
       if(card.Limit >= value){
        card.Saldo -= value;
       }else
       throw ("valor retirado acima do limite!!!!!");
    }
}


const card = new cartao("1234sdfs342",3000,7000,new PayService())
const card2 = new cartao("75345dfsdf",2000,9000,new PayService())
card.pagar(2500)
console.log(card.Saldo)
