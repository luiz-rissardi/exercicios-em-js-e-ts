class Employee {
    calcSalario(rank) {
        // logica do salario
        return 1;
    }
}
class recepcionista extends Employee {
    definirGerente(gerente) {
        this.gerente = gerente;
    }
    calcSalario(rank) {
        this.salario = rank * 1000 + 320;
        return this.salario;
    }
}
class vendedor extends Employee {
    constructor() {
        super(...arguments);
        this.comissao = 392.80;
    }
    definirGerente(gerente) {
        this.gerente = gerente;
    }
    calcSalario(rank) {
        this.salario = rank * 1000 + this.comissao;
        return this.salario;
    }
}
class gerente extends Employee {
    definirGerente(gerente) {
        this.gerente = gerente;
    }
    demitir(empregado) {
        console.log(`o empregado ${empregado.nome} virou cliente`);
    }
    emitirRelatorio() {
        console.log("um simples relátorio...");
    }
    calcSalario(rank) {
        this.salario = 1000 * rank + 700 * (rank * 0.10);
        return this.salario;
    }
}
class Ceo extends Employee {
    demitir(empregado) {
        console.log(`o empregado ${empregado.nome} virou cliente`);
    }
    emitirRelatorio() {
        console.log("um simples relátorio...");
    }
    calcSalario(rank) {
        this.salario = 1000 * rank + 700 * (rank / 2);
        return this.salario;
    }
}
function master(employee) {
    console.log(employee);
}
const gerente1 = new Ceo();
gerente1.nome = "luiz";
gerente1.calcSalario(4);
const recepcionista1 = new recepcionista();
recepcionista1.nome = "leticia";
recepcionista1.calcSalario(2);
recepcionista1.definirGerente(gerente1);
const recepcionista2 = new vendedor();
recepcionista2.nome = "leticia";
recepcionista2.calcSalario(2);
recepcionista2.definirGerente(gerente1);
const recepcionista3 = new gerente();
recepcionista3.nome = "leticia";
recepcionista3.calcSalario(2);
recepcionista3.definirGerente(gerente1);
master(recepcionista1);
master(recepcionista2);
master(recepcionista3);
master(gerente1);
export {};
