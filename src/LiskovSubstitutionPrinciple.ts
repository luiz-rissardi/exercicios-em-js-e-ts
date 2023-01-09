import { Iempregado,Igerenciado,Igerenciador } from "./interfaces/IEmployee.js";

class empregado implements Iempregado, Igerenciado{
    salario!: number;
    nome: string;
    gerente!: Igerenciador;
    constructor(nome:string){
        this.nome = nome;
    }
    definirGerente(gerente: Igerenciador): void {
        this.gerente = gerente;
    }
    calcSalario(rank: number): number {
        this.salario = ((1000*rank) * 0.10 * rank%0.23*100);
        return this.salario
    }
}

class gerente implements Iempregado,Igerenciador{
    salario!: number;
    nome!: string;
    constructor(nome:string){
        this.nome = nome
    }

    demitir(empregado: Iempregado): void {
        console.log(`o empregado ${empregado} agora se tornou cliente`)
    }
    emitirRelatorio(): void {
        console.log("um simples relátorio...");
    }
    calcSalario(rank: number): number {
        this.salario = ((1000*rank) * 0.10 * rank%0.23*100);
        return this.salario
    }
}

const person1 = new empregado("luiz");


person1.calcSalario(3)

console.log(person1)

