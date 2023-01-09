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
const gerente1 = new Ceo();
gerente1.nome = "luiz";
gerente1.calcSalario(5);

const recepcionista1 = new vendedor();
recepcionista1.nome = "leticia";
recepcionista1.calcSalario(2);
recepcionista1.definirGerente(gerente1);
console.log(recepcionista1.gerente);
export {};
