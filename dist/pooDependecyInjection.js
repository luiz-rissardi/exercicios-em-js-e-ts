class cartao {
    constructor(ncard, limit, saldo, payService) {
        this.payService = payService;
        this.Limit = limit;
        this.Saldo = saldo;
        this.card = ncard;
    }
    pagar(value) {
        this.payService.Pay(this, value);
    }
    get card() {
        return this.nCard;
    }
    get Limit() {
        return this.rateLimit;
    }
    set card(v) {
        this.nCard = v;
    }
    set Saldo(v) {
        this.saldo = v;
    }
    set Limit(v) {
        this.rateLimit = v;
    }
    get Saldo() {
        return this.saldo;
    }
}
class PayService {
    constructor() {
    }
    Pay(card, value) {
        if (card.Limit >= value) {
            card.Saldo -= value;
        }
        else
            throw ("valor retirado acima do limite!!!!!");
    }
}
const card = new cartao("1234sdfs342", 3000, 7000, new PayService());
const card2 = new cartao("75345dfsdf", 2000, 9000, new PayService());
card.pagar(2500);
console.log(card.Saldo);
export {};
