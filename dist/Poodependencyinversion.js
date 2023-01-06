class ContaBancaria {
    constructor(nconta, creditos, ativa, Service) {
        this.Service = Service;
        this.Nconta = nconta;
        this.ativada = ativa;
        this.creditos = creditos;
    }
    Pagar(value) {
        if (this.ativada) {
            if (value < this.creditos) {
                this.Service.PayService(this, value);
                return "pagamento realizado com sucesso!";
            }
            else {
                throw "não é possivel realizar o pagamento!";
            }
        }
        else
            throw "A conta está desativada!";
    }
    Depositar(value) {
        if (this.ativada) {
            this.Service.DepositService(this, value);
            return "Deposito realizado com sucesso!";
        }
        else {
            throw "A conta está desativada!";
        }
    }
}
export { ContaBancaria };
