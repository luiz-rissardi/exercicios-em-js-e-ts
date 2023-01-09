class empregado {
    constructor(nome) {
        this.nome = nome;
    }
    definirGerente(gerente) {
        this.gerente = gerente;
    }
    calcSalario(rank) {
        this.salario = ((1000 * rank) * 0.10 * rank % 0.23 * 100);
        return this.salario;
    }
}
class gerente {
    constructor(nome) {
        this.nome = nome;
    }
    demitir(empregado) {
        console.log(`o empregado ${empregado} agora se tornou cliente`);
    }
    emitirRelatorio() {
        console.log("um simples relátorio...");
    }
    calcSalario(rank) {
        this.salario = ((1000 * rank) * 0.10 * rank % 0.23 * 100);
        return this.salario;
    }
}
const person1 = new empregado("luiz");
person1.calcSalario(3);
console.log(person1);
export {};
