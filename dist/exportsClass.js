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
export { ServiceBradesco, };
