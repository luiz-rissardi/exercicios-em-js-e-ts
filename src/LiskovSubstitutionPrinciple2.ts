import { Iempregado,Igerenciado, Igerenciador } from "./interfaces/IEmployee.js";

 abstract class Employee implements Iempregado{
    salario!:number;
    nome!:string;
    
    calcSalario(rank: number): number {
        // logica do salario
        return 1;
    }
}

class recepcionista extends Employee implements Igerenciado{
    gerente!: Igerenciador;
    definirGerente(gerente: Igerenciador): void {
        this.gerente = gerente
    }

    override calcSalario(rank: number): number {
        this.salario = rank *1000 +320;
        return this.salario;
    }
}

class vendedor extends Employee implements Igerenciado {
    gerente!: Igerenciador;

    definirGerente(gerente: Igerenciador): void {
        this.gerente = gerente
    }
    comissao!:number;
    override calcSalario(rank: number): number {
        this.salario = rank * 1000 + this.comissao;
        return this.salario
    }
}

class gerente extends Employee implements Igerenciador,Igerenciado{
    gerente!: Igerenciador;

    definirGerente(gerente: Igerenciador): void {
        this.gerente = gerente
    }

    demitir(empregado: Iempregado): void {
        console.log(`o empregado ${empregado.nome} virou cliente`)
    }

    emitirRelatorio(): void {
        console.log("um simples relátorio...");
    }

    override calcSalario(rank: number): number {
        this.salario = 1000*rank + 700*(rank*0.10)
        return this.salario;
    }
}

class Ceo extends Employee implements Igerenciador{

    demitir(empregado: Iempregado): void {
        console.log(`o empregado ${empregado.nome} virou cliente`)
    }
    emitirRelatorio(): void {
        console.log("um simples relátorio...");
    }
    override calcSalario(rank: number): number {
        this.salario = 1000*rank + 700*(rank/2)
        return this.salario
    }

}

const gerente1 = new gerente()
gerente1.nome = "luiz";
gerente1.calcSalario(4)


const recepcionista1 = new recepcionista()
recepcionista1.nome = "leticia";
recepcionista1.calcSalario(2)
recepcionista1.definirGerente(gerente1)

console.log(recepcionista1)