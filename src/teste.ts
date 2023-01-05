import { Observable } from "rxjs"

interface person{
    nome:string,
    idade:number,
    sobrenome:string,
    getAll():string
}


class pessoa implements person{
    nome!: string;
    idade!: number;
    sobrenome !:string;
    constructor(nome:string,idade:number,sobrenome:string){
        this.nome = nome;
        this.idade = idade;
        this.sobrenome = sobrenome;
    }

    getAll(): string {
        return this.nome
    }

}

const person1 = new pessoa("luiz",16,"rissardi")
const nome = person1.getAll()
console.log(nome)