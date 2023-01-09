class ServiceBradesco {
    constructor() {
        this.Lucros = 0;
        this.Taxa = 0.05;
    }
    PayService(ContaBancaria, value) {
        ContaBancaria.creditos -= value;
    }
    DepositService(ContaBancaria, value) {
        this.Lucros += value * this.Taxa;
        ContaBancaria.creditos += value - (value * this.Taxa);
    }
}
class ServiceSicredi {
    constructor() {
        this.Lucros = 0;
        this.Taxa = 0.09;
    }
    PayService(ContaBancaria, value) {
        ContaBancaria.creditos -= value;
    }
    DepositService(ContaBancaria, value) {
        this.Lucros += value * this.Taxa;
        ContaBancaria.creditos += value - (value * this.Taxa);
    }
}
class ServiceCaixa {
    constructor() {
        this.Lucros = 0;
        this.Taxa = 0.15;
    }
    PayService(ContaBancaria, value) {
        ContaBancaria.creditos -= value;
    }
    DepositService(ContaBancaria, value) {
        this.Lucros += value * this.Taxa;
        ContaBancaria.creditos += value - (value * this.Taxa);
    }
}
export { ServiceBradesco, ServiceCaixa, ServiceSicredi, };
